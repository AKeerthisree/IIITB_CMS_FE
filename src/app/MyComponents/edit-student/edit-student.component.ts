import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Student } from '../details/Student';
import { DialogData } from '../login/login.component';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  paramID;
  student:Student=new Student();
  studentDetail !: FormGroup;
  studentObj : Student = new Student();
  
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router:Router,
    private route: ActivatedRoute,
    public dialog: MatDialog) { 
      
    }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.paramID= params['rollNo'];
      console.log(this.paramID);
     
    });

    this.adminService.getStudent(this.paramID).subscribe(res=>{
      this.student = res;
  },err=>{
    console.log("error while fetching data.")
  });

    this.studentDetail = this.formBuilder.group({
      rollNo:this.student.rollNo,
      name: this.student.name,
      password: this.student.password,
      email: this.student.email,
      programme:this.student.programme,
      roomNo:this.student.roomNo,
      hostelName:this.student.hostelName
    })
  }

  updateStudent() {

    this.studentObj.rollNo = this.studentDetail.value.rollNo;
    this.studentObj.name = this.studentDetail.value.name;
    this.studentObj.email = this.studentDetail.value.email;
    this.studentObj.password = this.studentDetail.value.password;
    this.studentObj.programme=this.studentDetail.value.programme;
    this.studentObj.roomNo=this.studentDetail.value.roomNo;
    this.studentObj.hostelName=this.studentDetail.value.hostelName;
  
    this.adminService.updateStudent(this.studentObj).subscribe(res=>{
      console.log(res);
      this.openDialog(true);
      
    },err=>{
      console.log(err);
      this.openDialog(false);
    })
  
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

