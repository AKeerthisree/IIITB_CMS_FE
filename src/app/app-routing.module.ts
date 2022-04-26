import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyComponents/login/login.component';
import { AddStudentComponent } from './MyComponents/add-student/add-student.component';
import { AddEmployeeComponent } from './MyComponents/add-employee/add-employee.component';
import { AdminComponent } from './MyComponents/admin/admin.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'addStudent',component:AddStudentComponent},
  {path:'addEmployee',component:AddEmployeeComponent},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
