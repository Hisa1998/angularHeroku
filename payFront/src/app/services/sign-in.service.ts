import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SignInService {

  constructor(private http:HttpClient) { }
  
  signIN(userName,password)
  {
  return this.http.post("localHost:6000/api/Auth/",{
      "UserName":userName
      ,"UserPassword" : password });
  }
  getMyList()
  {
    var token = localStorage.getItem('token');
    let headers1 = new HttpHeaders({"x-auth-token":token});
    return this.http.get("localHost:6000/api/Users/MyList",{headers:headers1});
     

  }

}
