import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../MyComponents/details/Student';
import { Employee } from '../MyComponents/details/Employee';
import { Complaint } from '../MyComponents/details/Complaint';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  serverUrl = 'http://localhost:8030/';
  options = {
    responseType: 'json',
  };
 

  constructor(private httpClient: HttpClient) { }

  saveStudent(student:Student):Observable<Student>{
    return this.httpClient.post<Student>(this.serverUrl + 'admin/addStudent/', student);
  }

  saveEmployee(emp:Employee):Observable<Employee>{
    return this.httpClient.post<Employee>(this.serverUrl + 'admin/addUser/', emp);
  }

  getAllEmployee():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.serverUrl+'admin/viewUsers');
  }
  getEmployee(email):Observable<Employee>{
    return this.httpClient.get<Employee>(this.serverUrl+'admin/getUser/'+email);
  }

  updateEmployee(emp:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(this.serverUrl+'admin/updateUser', emp);
  }

  deleteEmployee(emp:Employee):Observable<Employee>{
    return this.httpClient.delete<Employee>(this.serverUrl+'admin/deleteUser/'+emp.id);    
  }

  getStudent(rollNo):Observable<Student>{
    return this.httpClient.get<Student>(this.serverUrl+'admin/getStudent/'+rollNo);
  }
  getAllStudents():Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.serverUrl+'admin/viewStudents');
  }

  updateStudent(student:Student):Observable<Student>{
    return this.httpClient.put<Student>(this.serverUrl+'admin/updateStudent',student);
  }
  deleteStudent(student:Student):Observable<Student>{
    return this.httpClient.delete<Student>(this.serverUrl+'admin/deleteStudent/'+student.rollNo);
  }

  getComplaint(compID):Observable<Complaint>{
    return this.httpClient.get<Complaint>(this.serverUrl+'admin/getComplaint/'+compID);
  }
  getAllComplaints():Observable<Complaint[]>{
      return this.httpClient.get<Complaint[]>(this.serverUrl+'admin/viewComplaints');
  }
  updateComplaint(complaint):Observable<Complaint>{
    return this.httpClient.post<Complaint>(this.serverUrl+'admin/updateComplaint',complaint);
  }
}
