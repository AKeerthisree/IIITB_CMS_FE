import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SACService } from 'src/app/services/sac.service';
import { Complaint } from '../details/Complaint';
import { Student } from '../details/Student';

@Component({
  selector: 'app-food-com-complaints',
  templateUrl: './food-com-complaints.component.html',
  styleUrls: ['./food-com-complaints.component.css']
})
export class FoodComComplaintsComponent implements OnInit {

  complaintDetail !: FormGroup;
  complaintObj : Complaint = new Complaint();
  complaintList : Complaint[] = []
  searchText : string;
  
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
  this.sacService.getAllComplaints('FoodCom').subscribe(res=>{
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

}

logout(){
  this.router.navigateByUrl('/home')
}


}
