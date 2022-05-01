import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Complaint } from '../details/Complaint';
import { Student } from '../details/Student';
import { DialogData } from '../login/login.component';

@Component({
  selector: 'app-solve-complaint',
  templateUrl: './solve-complaint.component.html',
  styleUrls: ['./solve-complaint.component.css']
})
export class SolveComplaintComponent implements OnInit {

  complaintStatus=["Pending,Accepted","Rejected","Solved"]
  paramCompID;
  complaint:Complaint=new Complaint();
  complaintDetail !: FormGroup;
  complaintObj : Complaint = new Complaint();
  complaintList : Complaint[] = []
  searchText : string;
  
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router:Router,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    this.route.params.subscribe(params=>{
      this.paramCompID= params['compID'];
      console.log(this.paramCompID);
     
    });

    this.adminService.getComplaint(this.paramCompID).subscribe(res=>{
      this.complaint = res;
      console.log(this.complaint);
  },err=>{
    console.log("error while fetching data.")
  });


    this.complaintDetail = this.formBuilder.group({
      id: this.complaint.id,
      studentDetails:this.complaint.studentDetails,
      timeStamp:this.complaint.timeStamp,
      status:this.complaint.status,
      type:this.complaint.complaintType,
      description:this.complaint.description,
      response:this.complaint.response,
    })
  }




  updateComplaint(){
    console.log(this.complaint);
    this.adminService.updateComplaint(this.complaint).subscribe(res=>{
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
    this.router.navigateByUrl('/nav/adminComplaints');
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
    this.router.navigateByUrl('/nav/adminComplaints');
  }
}



