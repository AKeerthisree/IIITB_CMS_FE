import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './MyComponents/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button"
import {MatToolbarModule} from "@angular/material/toolbar"
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
//import { SearchfilterPipe } from './searchfilter.pipe';
import {MatTabsModule} from '@angular/material/tabs';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { AdminComponent } from './MyComponents/admin/admin.component';
import { AddStudentComponent } from './MyComponents/add-student/add-student.component';
import { AddEmployeeComponent } from './MyComponents/add-employee/add-employee.component';
import { SearchfilterPipe } from './MyComponents/searchfilter.pipe';
import { AdminStudentComponent } from './MyComponents/admin-student/admin-student.component';
import { SACComplaintsComponent } from './MyComponents/sac-complaints/sac-complaints.component';
import { AdminComplaintsComponent } from './MyComponents/admin-complaints/admin-complaints.component';
import { AdminEmployeesComponent } from './MyComponents/admin-employees/admin-employees.component';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
//import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './MyComponents/nav/nav.component';
import { StudentDashboardComponent } from './MyComponents/student-dashboard/student-dashboard.component';
import { StudentLoginComponent } from './MyComponents/student-login/student-login.component';
import { EditStudentComponent } from './MyComponents/edit-student/edit-student.component';
import { EditEmpployeeComponent } from './MyComponents/edit-empployee/edit-empployee.component';
import { SolveComplaintComponent } from './MyComponents/solve-complaint/solve-complaint.component';
import { FoodComComplaintsComponent } from './MyComponents/food-com-complaints/food-com-complaints.component';
import { PlaceComComplaintsComponent } from './MyComponents/place-com-complaints/place-com-complaints.component';
import { SportsComplaintsComponent } from './MyComponents/sports-complaints/sports-complaints.component';
import { HostelComplaintsComponent } from './MyComponents/hostel-complaints/hostel-complaints.component';
import { ExamComplaintsComponent } from './MyComponents/exam-complaints/exam-complaints.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { AboutUsComponent } from './MyComponents/about-us/about-us.component';
//import { NavComponent } from './MyComponents/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AddStudentComponent,
    AddEmployeeComponent,
    SearchfilterPipe,
    AdminStudentComponent,
    SACComplaintsComponent,
    AdminComplaintsComponent,
    AdminEmployeesComponent,
    NavComponent,
    StudentDashboardComponent,
    StudentLoginComponent,
    EditStudentComponent,
    EditEmpployeeComponent,
    SolveComplaintComponent,
    FoodComComplaintsComponent,
    PlaceComComplaintsComponent,
    SportsComplaintsComponent,
    HostelComplaintsComponent,
    ExamComplaintsComponent,
    HomeComponent,
    AboutUsComponent,
    //NavComponent,
   // NavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    FormsModule,
    NgbModule,
    MatTableModule,
    MatDatepickerModule ,
    MatDialogModule,
    MatCheckboxModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    // MatCardContent
    MatDividerModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSortModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    LayoutModule,
    MatSidenavModule
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
