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
    var token =localStorage.getItem('token');
    let headers = new HttpHeaders({"x-auth-token":token})
    return this.http.post("localHost:6000/api/Users/Add",{
      "addItem": text
    },{headers:headers})
  };
  deleteItem(index)
  {
    
    var token =localStorage.getItem('token');
    let headers = new HttpHeaders({"x-auth-token":token})
    return this.http.post("localHost:6000/api/Users/Remove",{
      "index": index
    },{headers:headers})
  };

  getList(){
    var token = localStorage.getItem('token');
    let headers1 = new HttpHeaders({"x-auth-token":token});
    return this.http.get("localHost:6000/api/Users/MyList",{headers:headers1});
  }
}
