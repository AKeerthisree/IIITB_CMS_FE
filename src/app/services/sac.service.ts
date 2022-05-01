import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from '../MyComponents/details/Complaint';

@Injectable({
  providedIn: 'root'
})
export class SACService {

  serverUrl = 'http://localhost:8030/';
  options = {
    responseType: 'json',
  };

  constructor(private httpClient:HttpClient) { }

  getAllComplaints(role):Observable<Complaint[]>{
      return this.httpClient.get<Complaint[]>(this.serverUrl+'role_complaints/'+role);
  }
  updateComplaint(complaint):Observable<Complaint>{
    return this.httpClient.post<Complaint>(this.serverUrl+'updateComp',complaint);
  }
  //sending report to patient email
  sendEmail(email_details){
    return this.httpClient.post(this.serverUrl+'sendEmail/',email_details);
  }
}
