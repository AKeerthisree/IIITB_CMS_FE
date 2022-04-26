import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
//import { loginRequest } from '../details/loginRequest';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';


export interface DialogData {
  title:string;
  content:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message;
  form={
    email:'',
    password:'',
    role :''
  }
  hide=true;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
  constructor(private router: Router,
    private loginService: LoginService,
    public dialog: MatDialog) {
      
     }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(JSON.stringify(this.form));
    let resp=this.loginService.login(this.form);
    resp.subscribe(
      (data)=>{
      this.message=data
      console.log(data)
      if(this.message){
        console.log(this.message)
      }
      // if(this.message!=null){
      //   if(this.form.role == "Admin")
      //     this.router.navigateByUrl('/admin')
      //   else if(this.form.role == "Receptionist")
      //     this.router.navigateByUrl('/receivingStation')
      //   else if(this.form.role == "Technician")
      //     this.router.navigateByUrl('/grossingStation')
      //   else if(this.form.role == "Doctor")
      //     this.router.navigateByUrl('/doctorIndex')
      //   else if(this.form.role == "HIS")
      //     this.router.navigateByUrl('/addPatientHIS')
      // }
        
      else
        console.log("failed")

      
    },
    err=>{
      console.log(err);
      this.openDialog(false);
    });
    
    
  }

  openDialog(response) {
   
    if(response)
    {
      this.dialog.open(DialogElementsExampleDialog);
    }
    else{
      const dialogRef = this.dialog.open(DialogUnsuccess, {
        width: '300px',
        data: {}
      });
    }
    
  }

}


@Component({
  selector: 'dialog-success',
  templateUrl: '../dialog-success.html',
})
export class DialogElementsExampleDialog { 
  constructor(
    public dialogRef: MatDialogRef<DialogElementsExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ){}
  close(){
    this.dialogRef.close();
  }
  
}

@Component({
  selector: 'dialog-unsuccess',
  templateUrl: '../dialog-unsuccess.html',
})
export class DialogUnsuccess { 
  constructor(
    public dialogRef: MatDialogRef<DialogUnsuccess>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ){}
  close(){
    this.dialogRef.close();
    window.location.reload();
  }
}


