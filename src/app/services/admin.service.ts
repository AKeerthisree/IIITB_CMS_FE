import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../MyComponents/details/Student';
import { Employee } from '../MyComponents/details/Employee';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  serverUrl = 'http://localhost:8030/';
  options = {
    responseType: 'json',
  };
  http: any;

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

  updateEmployee(emp:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(this.serverUrl+'admin/updateUser', emp);
  }

  deleteEmployee(emp:Employee):Observable<Employee>{
    return this.httpClient.delete<Employee>(this.serverUrl+'admin/deleteUser/'+emp.id);    
  }


}
