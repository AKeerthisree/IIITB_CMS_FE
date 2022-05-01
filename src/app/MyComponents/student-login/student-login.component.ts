import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { DialogData } from '../login/login.component';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  message;
  form={
    studentID:'',
    password:''
  }
  hide=true;
   
  constructor(private router: Router,
    private loginService: LoginService,
    public dialog: MatDialog) {
      
     }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(JSON.stringify(this.form));
    let resp=this.loginService.loginStudent(this.form);
    resp.subscribe(
      (data)=>{
      this.message=data
      console.log(data)
      if(this.message){
        console.log(this.message);
        this.router.navigate(["/studentDashboard",this.form.studentID]);

      }
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


