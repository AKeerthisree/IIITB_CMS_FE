import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  serverUrl = 'http://localhost:8030/';
  options = {
    responseType: 'json',
  };

  constructor(private httpClient: HttpClient) { }

  login(form){
    return this.httpClient.post(this.serverUrl+'login',form);
  }
}




