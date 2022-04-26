import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../details/Student';
import { AdminService } from 'src/app/services/admin.service';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../login/login.component';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: Student=new Student();
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(
    private router: Router,
    private adminService:AdminService,
    private dialog:MatDialog,
  ) {
    this.student=new Student();
   }

  ngOnInit(): void {
  }

  saveStudentDetails()
  {
    this.student.password=this.student.rollNo;
    this.adminService.saveStudent(this.student).subscribe(
      (res)=>{
        console.log(res);
        this.openDialog(true);
      },
      err=>{
        console.log(err);
        this.openDialog(false);
      }
    )
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

  logout(){
    this.router.navigateByUrl('/login')
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
    window.location.reload();
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



