import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Student } from '../details/Student';

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css']
})
export class AdminStudentComponent implements OnInit {

 
  studentDetail !: FormGroup;
  studentObj : Student = new Student();
  studentList : Student[] = []
  searchText : string;
  
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router:Router) { }

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
    this.getAllStudents();
  }
  addStudent(){
    // console.log(this.studentDetail);
    // this.studentObj.rollNo=this.studentDetail.value.rollNo;
    // this.studentObj.name=this.studentDetail.value.name;
    // this.studentObj.email=this.studentDetail.value.email;
    // this.studentObj.password=this.studentDetail.value.rollNo;
    // this.studentObj.programme=this.studentDetail.value.programme;
    // this.studentObj.roomNo=this.studentDetail.value.roomNo;
    // this.studentObj.hostelName=this.studentDetail.value.hostelName;
    
    // this.adminService.saveStudent(this.studentObj).subscribe(res=>{
    //   console.log(res);
    //   this.getAllStudents();
    // },err=>{
    //     console.log(err);
    // });
    this.router.navigateByUrl('/nav/addStudent');
}

getAllStudents() {
  this.adminService.getAllStudents().subscribe(res=>{
      this.studentList = res;
  },err=>{
    console.log("error while fetching data.")
  });
}

editStudent(student : Student) {
  // this.studentDetail.controls['rollNo'].setValue(student.rollNo);
  // this.studentDetail.controls['name'].setValue(student.name);
  // this.studentDetail.controls['email'].setValue(student.email);
  // this.studentDetail.controls['password'].setValue(student.rollNo);
  // this.studentDetail.controls['programme'].setValue(student.programme);
  // this.studentDetail.controls['roomNo'].setValue(student.roomNo);
  // this.studentDetail.controls['hostelName'].setValue(student.hostelName);
  let rollNo=student.rollNo;
  this.router.navigate(["/nav/editStudent",rollNo]);

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
    this.getAllStudents();
  },err=>{
    console.log(err);
  })

}

deleteStudent(student : Student) {

  this.adminService.deleteStudent(student).subscribe(res=>{
    console.log(res);
    alert('Employee deleted successfully');
    this.getAllStudents();
  },err => {
    console.log(err);
  });

}

logout(){
  this.router.navigateByUrl('/home')
}
}
