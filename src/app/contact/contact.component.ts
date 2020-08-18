import { Component, OnInit , ViewChild } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Feedback , ContactType} from '../menu/shared/feedback';
import {FeedbackService} from '../services/feedback.service';
import {expand} from '../animations/app-animations';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
    animations: [
      expand()
    ]
})
export class ContactComponent implements OnInit {
  feedbackForm:FormGroup;
feedback:Feedback;
feedbacktemp:Feedback=null;
errMess: string;
contactType=ContactType;
loading:boolean=false;
@ViewChild('form') FeedbackFormDirective;
formErrors={
  'firstname':'',
  'lastname':'',
  'telnum':'',
  'email':'',
  'message':''
};
ValidationMessages={
'firstname':{
  'required':'Firstname is required',
  'minlength':'First name must be at least 2 caracteres',
  'maxlength':'First name must not surpass 25 caracteres'
},
'lastname':{
  'required':'Last name is required',
  'minlength':'Last name must be at least 2 caracteres',
  'maxlength':'Last name must not surpass 25 caracteres'
},
'telnum':{
  'required':'Phone number is required',
  'pattern':'must be a valid phone number'
},
'email':{
  'required':'email is required',
  'email':'please enter a valid email'
},
'message':{
  'required':'your feedback is required',
}
};
  constructor(
    private fb: FormBuilder,
    private feedbackservice:FeedbackService
  ) { 
    this.createFrom();
  }

  ngOnInit(): void {
  }
  createFrom(){
    this.feedbackForm=this.fb.group({
      firstname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      lastname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      telnum:[0,[Validators.required,Validators.pattern]],
      email:['',[Validators.required,Validators.email]],
      agree:false,
      contacttype:'None',
      message:['',Validators.required]
    });
    this.feedbackForm.valueChanges.subscribe((data)=>{this.onValueChanged(data)});
    this.onValueChanged(); // reset form validation messages
  }
  onValueChanged(data?:any){
if(!this.feedbackForm){
  return ;
}
const form=this.feedbackForm;
for (const field in this.formErrors){
  if(this.formErrors.hasOwnProperty(field)){
    this.formErrors[field]='';
    const control =form.get(field);
    if(control && control.dirty && !control.valid){
      const messages=this.ValidationMessages[field];
      for(const key in control.errors){
        if(control.errors.hasOwnProperty(key)){
          this.formErrors[field]+=messages[key]+' ';
        }
      }
    }
  }
}
  }
  onSubmit(){
    this.loading=true;
    this.feedback=this.feedbackForm.value;
    console.log(this.feedback)
    this.feedbackservice.submitFeedback(this.feedback).subscribe(
      feedback=>{
        this.feedbacktemp=feedback;
        this.loading=false;
        setTimeout(()=>{ this.feedbacktemp=null; }, 5000);
      },
      errmess => {
        this.errMess = <any>errmess;
        this.loading=false
      });
    this.feedbackForm.reset({
      firstname:'',
      lastname:'',
      telnum:0,
      email:'',
      agree:false,
      contacttype:'None',
      message:''
    });
this.FeedbackFormDirective.resetForm();
  }

}
