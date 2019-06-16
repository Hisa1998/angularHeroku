import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
;

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { 
  
  };

  addItem(text)
  {
    let headers = new HttpHeaders({"x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDA1NmY0YjYyZDZiYTcxMzhhYWFkYWIiLCJpYXQiOjE1NjA2MzczMjIsImV4cCI6MTU2MDcyMzcyMn0.WTu7F1kjRHty2HWj1kw27xlvA7xd--tPXjEXTQcVY3Y"})
    return this.http.post("localHost:6000/api/Users/Add",{
      "addItem": text
    },{headers:headers})
  };
  deleteItem(index)
  {

  };
  getList(){
    return [ "hello" , 'hi', 'bye']
  }
}
