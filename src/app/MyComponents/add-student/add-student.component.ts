import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  studentDetail !: FormGroup;
  studentObj : Student = new Student();
  studentList : Student[] = []
  searchText : string;
  
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router:Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
      this.studentDetail = this.formBuilder.group({
        rollNo:[''],
        name: [''],
        password: [''],
        email: [''],
        programme:[''],
        roomNo:[''],
        hostelName:['']
      })
    }

  addStudent(){
    console.log(this.studentDetail);
    this.studentObj.rollNo=this.studentDetail.value.rollNo;
    this.studentObj.name=this.studentDetail.value.name;
    this.studentObj.email=this.studentDetail.value.email;
    this.studentObj.password=this.studentDetail.value.rollNo;
    this.studentObj.programme=this.studentDetail.value.programme;
    this.studentObj.roomNo=this.studentDetail.value.roomNo;
    this.studentObj.hostelName=this.studentDetail.value.hostelName;
    
    this.adminService.saveStudent(this.studentObj).subscribe(res=>{
      console.log(res);
      this.openDialog(true);
    },err=>{
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
    private router:Router,
    public dialogRef: MatDialogRef<DialogElementsExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ){}
  close(){
    this.dialogRef.close();
    this.router.navigateByUrl('/nav/adminStudent');
  }
  
}

@Component({
  selector: 'dialog-unsuccess',
  templateUrl: '../dialog-unsuccess.html',
})
export class DialogUnsuccess { 
  constructor(
    private router:Router,
    public dialogRef: MatDialogRef<DialogUnsuccess>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ){}
  close(){
    this.dialogRef.close();
    this.router.navigateByUrl('/nav/adminStudent');
  }
}



