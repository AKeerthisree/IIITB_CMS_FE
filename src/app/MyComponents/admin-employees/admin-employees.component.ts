import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../details/Employee';
import { AdminService } from 'src/app/services/admin.service';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-admin-employees',
  templateUrl: './admin-employees.component.html',
  styleUrls: ['./admin-employees.component.css']
})

export class AdminEmployeesComponent implements OnInit {
  
  // @ViewChild('navigation', {static: false}) 
  // navComponent: NavComponent;

  empDetail !: FormGroup;
  empObj : Employee = new Employee();
  empList : Employee[] = []
  searchText : string;
  
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router:Router) { }

  ngOnInit(): void {
    this.empDetail = this.formBuilder.group({
      id:[''],
      name: [''],
      password: [''],
      email: [''],
      // phone: [''],
      role:['']
    })
    this.getAllEmployee();
  }
  addEmployee(){
    // console.log(this.empDetail);
    // this.empObj.id=this.empDetail.value.id;
    // this.empObj.name=this.empDetail.value.name;
    // this.empObj.email=this.empDetail.value.email;
    // // this.empObj.phone=this.empDetail.value.phone;
    // this.empObj.role=this.empDetail.value.role;
    // this.empObj.password=this.empDetail.value.name;
    
    // this.adminService.saveEmployee(this.empObj).subscribe(res=>{
    //   console.log(res);
    //   this.getAllEmployee();
    // },err=>{
    //     console.log(err);
    // });
    this.router.navigateByUrl('/nav/addEmployee');
}

getAllEmployee() {
  this.adminService.getAllEmployee().subscribe(res=>{
      this.empList = res;
  },err=>{
    console.log("error while fetching data.")
  });
}

editEmployee(emp : Employee) {
  // this.empDetail.controls['id'].setValue(emp.id);
  // this.empDetail.controls['name'].setValue(emp.name);
  // this.empDetail.controls['email'].setValue(emp.email);
  // //this.empDetail.controls['phone'].setValue(emp.phone);
  // this.empDetail.controls['role'].setValue(emp.role);
  // this.empDetail.controls['password'].setValue(emp.id);
  let email=emp.email;
  this.router.navigate(["/nav/editEmployee",email]);

}

updateEmployee() {

  this.empObj.id = this.empDetail.value.id;
  this.empObj.name = this.empDetail.value.name;
 // this.empObj.phone = this.empDetail.value.phone;
  this.empObj.email = this.empDetail.value.email;
  this.empObj.role = this.empDetail.value.role;
  this.empObj.password=this.empDetail.value.password;

  this.adminService.updateEmployee(this.empObj).subscribe(res=>{
    console.log(res);
    this.getAllEmployee();
  },err=>{
    console.log(err);
  })

}

deleteEmployee(emp : Employee) {

  this.adminService.deleteEmployee(emp).subscribe(res=>{
    console.log(res);
    alert('Employee deleted successfully');
    this.getAllEmployee();
  },err => {
    console.log(err);
  });

}

logout(){
  this.router.navigateByUrl('/home')
}



}
