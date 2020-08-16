import { Component, OnInit } from '@angular/core';
import {MatDialog , MatDialogRef} from '@angular/material/dialog'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user={
  username:'',
  password:'',
  remember:false
};
  constructor(public dialog:MatDialog,public dialogRef:MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }
  closeDiag(){
    this.dialogRef.close();
  }
  onSubmit(){
    console.log('user :',this.user);
    this.dialogRef.close();
  }
}
