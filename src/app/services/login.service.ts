import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  serverUrl = 'http://localhost:8050/';
  options = {
    responseType: 'json',
  };

  constructor(private httpClient: HttpClient) { }

  login(form){
    return this.httpClient.post(this.serverUrl+'login',form);
  }
  loginStudent(form){
    return this.httpClient.post(this.serverUrl+'student/login',form);
  }
}




