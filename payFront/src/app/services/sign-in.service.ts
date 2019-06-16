import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SignInService {

  constructor(private http:HttpClient) { }
  
  signIN(userName,password)
  {
  return this.http.post("https://stark-thicket-13694.herokuapp.com/api/Auth/",{
      "UserName":userName
      ,"UserPassword" : password });
  }
}
