import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Complaint } from '../details/Complaint';
import { SACService } from 'src/app/services/sac.service';
import { Router } from '@angular/router';
import { Student } from '../details/Student';
import { EmailDetails } from '../details/EmailDetails';

@Component({
  selector: 'app-sac-complaints',
  templateUrl: './sac-complaints.component.html',
  styleUrls: ['./sac-complaints.component.css']
})
export class SACComplaintsComponent implements OnInit {

  complaintDetail !: FormGroup;
  complaintObj : Complaint = new Complaint();
  complaintList : Complaint[] = []
  searchText : string;
  emailDetails:EmailDetails=new EmailDetails();
  
  constructor(
    private formBuilder: FormBuilder,
    private sacService: SACService,
    private router:Router) { }

  ngOnInit(): void {
    this.complaintDetail = this.formBuilder.group({
      id:[],
      studentDetails:new Student(),
      timeStamp:[''],
      status:[''],
      type:[''],
      description:[''],
      response:[''],
    })
    this.getAllSACComplaints();
  }
  
getAllSACComplaints() {
  this.sacService.getAllComplaints('SAC').subscribe(res=>{
      this.complaintList = res;
      console.log(res);
  },err=>{
    console.log("error while fetching data.")
  });
}

solveComplaint(complaint:Complaint){
  this.complaintDetail.controls['id'].setValue(complaint.id);
  this.complaintDetail.controls['studentDetails'].setValue(complaint.studentDetails);
  this.complaintDetail.controls['timeStamp'].setValue(complaint.timeStamp);
  this.complaintDetail.controls['description'].setValue(complaint.description);
  this.complaintDetail.controls['status'].setValue(complaint.status);
  this.complaintDetail.controls['type'].setValue(complaint.complaintType);
  this.complaintDetail.controls['response'].setValue(complaint.response);
  console.log(this.complaintDetail);
  

  
  }




updateComplaint(){
  this.complaintObj.id=this.complaintDetail.value.id;
  this.complaintObj.studentDetails=this.complaintDetail.value.studentDetails;
  this.complaintObj.timeStamp=this.complaintDetail.value.timeStamp;
  this.complaintObj.description=this.complaintDetail.value.description;
  this.complaintObj.status=this.complaintDetail.value.status;
  this.complaintObj.complaintType=this.complaintDetail.value.type;
  this.complaintObj.response=this.complaintDetail.value.response;
  console.log(this.complaintObj);
  this.sacService.updateComplaint(this.complaintObj).subscribe(res=>{
        console.log(res);
        this.getAllSACComplaints();
      },err=>{
        console.log(err);
      })

       //sending email

   this.emailDetails.to=this.complaintObj.studentDetails.email;
   this.emailDetails.subject="Lab Report";
   this.emailDetails.message="Your Complaint Status: "+this.complaintObj.status+" and "+"Response Message:"+this.complaintObj.response;
   let resp=this.sacService.sendEmail(this.emailDetails);
     resp.subscribe((data)=>{
       console.log(data);
      });
}

// updateStudent() {

//   this.studentObj.rollNo = this.studentDetail.value.rollNo;
//   this.studentObj.name = this.studentDetail.value.name;
//   this.studentObj.email = this.studentDetail.value.email;
//   this.studentObj.password = this.studentDetail.value.password;
//   this.studentObj.programme=this.studentDetail.value.programme;
//   this.studentObj.roomNo=this.studentDetail.value.roomNo;
//   this.studentObj.hostelName=this.studentDetail.value.hostelName;

//   this.adminService.updateStudent(this.studentObj).subscribe(res=>{
//     console.log(res);
//     this.getAllStudents();
//   },err=>{
//     console.log(err);
//   })

// }

// deleteStudent(student : Student) {

//   this.adminService.deleteStudent(student).subscribe(res=>{
//     console.log(res);
//     alert('Employee deleted successfully');
//     this.getAllStudents();
//   },err => {
//     console.log(err);
//   });

// }

logout(){
  this.router.navigateByUrl('/home')
}


}
