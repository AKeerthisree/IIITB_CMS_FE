import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Employee } from '../details/Employee';
import { DialogData } from '../login/login.component';

@Component({
  selector: 'app-edit-empployee',
  templateUrl: './edit-empployee.component.html',
  styleUrls: ['./edit-empployee.component.css']
})
export class EditEmpployeeComponent implements OnInit {
  paramEmail;
  employee:Employee=new Employee();
  empDetail !: FormGroup;
  empObj : Employee = new Employee();
  
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router:Router,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    this.route.params.subscribe(params=>{
      this.paramEmail= params['email'];
      console.log(this.paramEmail);
     
    });

    this.adminService.getEmployee(this.paramEmail).subscribe(res=>{
      this.employee = res;
  },err=>{
    console.log("error while fetching data.")
  });


    this.empDetail = this.formBuilder.group({
      id:this.employee.id,
      name: this.employee.name,
      password: this.employee.password,
      email: this.employee.email,
      // phone: [''],
      role:this.employee.role,
    })
  
  }
  
  updateEmployee() {
  
    this.empObj.id = this.empDetail.value.id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.email = this.empDetail.value.email;
    this.empObj.role = this.empDetail.value.role;
    this.empObj.password=this.empDetail.value.password;
  
    this.adminService.updateEmployee(this.empObj).subscribe(res=>{
      console.log(res);
      this.openDialog(true)
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
    this.router.navigateByUrl('/nav/adminEmployees');
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
    this.router.navigateByUrl('/nav/adminEmployees');
  }
}


