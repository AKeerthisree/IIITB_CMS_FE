import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from '../details/Student';
import { StudentDashboardService } from 'src/app/services/student-dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from '../details/Complaint';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  param_rollNo;
  student:Student=new Student();
  complaintDetail !: FormGroup;
  complaintObj : Complaint = new Complaint();
  complaintList : Complaint[] = []
  searchText : string;
  constructor(
    private formBuilder: FormBuilder,
    private studentDashboardService: StudentDashboardService,
    private router:Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.complaintDetail = this.formBuilder.group({
    id:[],
    studentDetails:new Student(),
    timeStamp:[''],
    status:[''],
    complaintType:[''],
    description:[''],
    response:[''],
  })
    this.route.params.subscribe(params=>{
       this.param_rollNo= params['rollNo'];
       console.log(this.param_rollNo);
      
     })

     this.studentDashboardService.getComplaints_Student(this.param_rollNo).subscribe(
       res=>{
         this.complaintList=res;
         console.log(this.complaintList);
       },
       err=>{
         console.log(err);
       }
     )

     this.studentDashboardService.getStudent(this.param_rollNo).subscribe(
       res=>{
         this.student=res;
       },
       err=>{
          console.log(err);
       }
     )
     this.getComplaints_Student();
  }
  getComplaints_Student() {
    this.studentDashboardService.getComplaints_Student(this.param_rollNo).subscribe(
      res=>{
        console.log(res);
        this.complaintList=res;
      },
      err=>{
        console.log(err);
      }
    )
  }
  

  addComplaint(){
    console.log(this.complaintDetail);

    //this.complaintObj.id=this.complaintDetail.value.id;
    
    this.complaintObj.timeStamp=this.complaintDetail.value.timeStamp;
    this.complaintObj.status=this.complaintDetail.value.status;
    this.complaintObj.description=this.complaintDetail.value.description;
    this.complaintObj.complaintType=this.complaintDetail.value.complaintType;
    this.complaintObj.response=this.complaintDetail.value.response;
    this.complaintObj.studentDetails=this.student;

    
    this.studentDashboardService.addComplaint_Student(this.complaintObj).subscribe(res=>{
      console.log(res);
      this.getComplaints_Student();
    },err=>{
        console.log(err);
    });
    this.refresh();
    
   
}
refresh(){
  this.complaintDetail.controls['timeStamp'].setValue("");
  this.complaintDetail.controls['id'].setValue("");
  this.complaintDetail.controls['status'].setValue("");
  this.complaintDetail.controls['description'].setValue("");
  this.complaintDetail.controls['complaintType'].setValue("");
  this.complaintDetail.controls['response'].setValue("");

}
editComplaint(complaint : Complaint) {
  this.complaintDetail.controls['timeStamp'].setValue(complaint.timeStamp);
  this.complaintDetail.controls['id'].setValue(complaint.id);
  this.complaintDetail.controls['status'].setValue(complaint.status);
  this.complaintDetail.controls['description'].setValue(complaint.description);
  this.complaintDetail.controls['complaintType'].setValue(complaint.complaintType);
  this.complaintDetail.controls['response'].setValue(complaint.response);


}

updateComplaint(){
  this.complaintObj.id=this.complaintDetail.value.id;
  this.complaintObj.studentDetails=this.student;
  this.complaintObj.timeStamp=this.complaintDetail.value.timeStamp;
  this.complaintObj.description=this.complaintDetail.value.description;
  this.complaintObj.status=this.complaintDetail.value.status;
  this.complaintObj.complaintType=this.complaintDetail.value.type;
  this.complaintObj.response=this.complaintDetail.value.response;
  console.log(this.complaintObj);
  this.studentDashboardService.updateComplaint_Student(this.complaintObj).subscribe(res=>{
        console.log(res);
        this.getComplaints_Student();
      },err=>{
        console.log(err);
      })

}

  
  logout(){
    this.router.navigateByUrl('/home')
  }
  
}
