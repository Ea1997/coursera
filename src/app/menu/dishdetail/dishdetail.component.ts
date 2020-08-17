import { Component, OnInit, Input ,ViewChild,Inject} from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { Dish } from '../shared/dish';
import {DishService} from '../../services/dish.service';
import {switchMap} from 'rxjs/operators';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Comment} from '../shared/Comment';
import {visibility,flyInOut,expand} from '../../animations/app-animations'
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations: [
    visibility(),
    flyInOut(),
    expand()
  ]
})
export class DishdetailComponent implements OnInit {
  visibility = 'shown';
  commentForm:FormGroup;
  comment:Comment;
  commentsTemp:Comment;
  errMess: string;
    dish:Dish;
    dishcopy:Dish;
    dishIds:number[];
    prev:number;
    next:number;
    @ViewChild('commentform') Commentdirective;
    formErrors={
      'author':'',
     'comment':'',
     'rating':''
    };
  
  
  
  
    ValidationMessages={
      'author':{
        'required':"Author's name is required",
        'minlength':"Author's name must be at least 2 caracteres",
      },
     
      'comment':{
        'required':'The comment is required',
      },
      'rating':{
  
      }
      };
    constructor(private DishService:DishService,private Location:Location,private route :ActivatedRoute,private fb: FormBuilder,@Inject('BaseUrl') private BaseURL) {
      this.createFrom();
     }
  
    ngOnInit(): void {
      this.DishService.getDishIds().subscribe((dishes) =>{
        this.dishIds=dishes
      },
      errmess => this.errMess = <any>errmess);
      
      this.route.params.pipe(switchMap((params: Params) => { this.visibility = 'hidden'; return this.DishService.getDish(+params['id']); }))
      .subscribe(dish => { this.dish = dish; this.dishcopy = dish; this.setPrevNext(dish.id); this.visibility = 'shown'; },
        errmess => this.errMess = <any>errmess);
    
    
    }
  
  
  
  
  
  
    createFrom(){
      this.commentForm=this.fb.group({
        author:['',[Validators.required,Validators.minLength(2)]],
        comment:['',Validators.required],
        rating:[5]
      });
      this.commentForm.valueChanges.subscribe((data)=>{this.onValueChanged(data)});
      this.onValueChanged(); // reset form validation messages
    }
    onValueChanged(data?:any){
      if(!this.commentForm){
        return ;
      }
      const form=this.commentForm;
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
      if(form.valid){
        this.commentsTemp=form.value;
      }else{
        this.commentsTemp=null;
      }
        }
        
        onSubmit(){
          this.comment=this.commentForm.value;
          console.log(this.comment);
          this.comment.date=new Date().toISOString();
          this.dishcopy.comments.push(this.comment);
          this.DishService.putDish(this.dishcopy).subscribe((dish)=>{
            this.dish=dish;
            this.dishcopy=dish;
          },
          (errMess)=>{
            this.dish=null;
            this.dishcopy=null;
            this.errMess=<any>errMess;
          }
          );

          this.comment=null;
          this.commentForm.reset({
            author:'',
            rating:5,
            comment:'',
           
          });
     
      this.Commentdirective.resetForm();
        }
  
  
    setPrevNext(dishId:number){
      const index=this.dishIds.indexOf(dishId);
      this.prev=this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
      this.next=this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length]
    }
  goBack(){
    this.Location.back();
  }
}
