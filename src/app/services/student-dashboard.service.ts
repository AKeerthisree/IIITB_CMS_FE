import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from '../MyComponents/details/Complaint';
import { Student } from '../MyComponents/details/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentDashboardService {

  serverUrl = 'http://localhost:8050/';
  options = {
    responseType: 'json',
  };

  constructor(private httpClient: HttpClient) { }

  getComplaints_Student(studentID):Observable<Complaint[]>{
    return this.httpClient.get<Complaint[]>(this.serverUrl+'student/viewComplaints/'+studentID);
  }

  addComplaint_Student(complaint:Complaint):Observable<Complaint>{
    return this.httpClient.post<Complaint>(this.serverUrl+'student/addComplaint',complaint);
  }

  updateComplaint_Student(complaint:Complaint):Observable<Complaint>{
    return this.httpClient.post<Complaint>(this.serverUrl+'updateComp',complaint);
  }
  getStudent(studentID):Observable<Student>{
    return this.httpClient.get<Student>(this.serverUrl+'admin/getStudent/'+studentID);
  }
  
}
