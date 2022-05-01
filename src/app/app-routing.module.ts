import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyComponents/login/login.component';
import { AddStudentComponent } from './MyComponents/add-student/add-student.component';
import { AddEmployeeComponent } from './MyComponents/add-employee/add-employee.component';
import { AdminComponent } from './MyComponents/admin/admin.component';
import { AdminStudentComponent } from './MyComponents/admin-student/admin-student.component';
import { SACComplaintsComponent } from './MyComponents/sac-complaints/sac-complaints.component';
import { AdminComplaintsComponent } from './MyComponents/admin-complaints/admin-complaints.component';
import { AdminEmployeesComponent } from './MyComponents/admin-employees/admin-employees.component';
import { NavComponent } from './MyComponents/nav/nav.component';
import { StudentDashboardComponent } from './MyComponents/student-dashboard/student-dashboard.component';
import { StudentLoginComponent } from './MyComponents/student-login/student-login.component';
import { EditStudentComponent } from './MyComponents/edit-student/edit-student.component';
import { EditEmpployeeComponent } from './MyComponents/edit-empployee/edit-empployee.component';
import { SolveComplaintComponent } from './MyComponents/solve-complaint/solve-complaint.component';
import { ExamComplaintsComponent } from './MyComponents/exam-complaints/exam-complaints.component';
import { FoodComComplaintsComponent } from './MyComponents/food-com-complaints/food-com-complaints.component';
import { HostelComplaintsComponent } from './MyComponents/hostel-complaints/hostel-complaints.component';
import { PlaceComComplaintsComponent } from './MyComponents/place-com-complaints/place-com-complaints.component';
import { SportsComplaintsComponent } from './MyComponents/sports-complaints/sports-complaints.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { AboutUsComponent } from './MyComponents/about-us/about-us.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  // {path:'addStudent',component:AddStudentComponent},
  // {path:'addEmployee',component:AddEmployeeComponent},
  {path:'admin',component:AdminComponent},
  {path:'studentDashboard/:rollNo',component:StudentDashboardComponent},
  {path:'studentLogin',component:StudentLoginComponent}, 
  {path:'sacComplaints',component:SACComplaintsComponent},
  {path:'examComplaints',component:ExamComplaintsComponent},
  {path:'foodComComplaints',component:FoodComComplaintsComponent},
  {path:'hostelComplaint',component:HostelComplaintsComponent},
  {path:'placeComComplaint',component:PlaceComComplaintsComponent}, 
  {path:'sportsComplaint',component:SportsComplaintsComponent},
  {path:'home',component:HomeComponent},
  {path:'aboutUs',component:AboutUsComponent},
  
  {path:'nav',component:NavComponent,
  children:[
    {path:'adminEmployees',component:AdminEmployeesComponent},
    {path:'adminComplaints',component:AdminComplaintsComponent},
    {path:'adminStudent',component:AdminStudentComponent},
    {path:'addStudent',component:AddStudentComponent},
    {path:'addEmployee',component:AddEmployeeComponent},
    {path:'editStudent/:rollNo',component:EditStudentComponent},
    {path:'editEmployee/:email',component:EditEmpployeeComponent},
    {path:'solveComplaint/:compID',component:SolveComplaintComponent},
  ]
  }
];
export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
