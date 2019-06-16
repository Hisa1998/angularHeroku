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
    return this.http.post("https://stark-thicket-13694.herokuapp.com/api/Users/Add",{
      "addItem": text
    },{headers:headers})
  };
  deleteItem(index)
  {
    
    var token =localStorage.getItem('token');
    let headers = new HttpHeaders({"x-auth-token":token})
    return this.http.post("https://stark-thicket-13694.herokuapp.com/api/Users/Remove",{
      "index": index
    },{headers:headers})
  };

  getList(){
    var token = localStorage.getItem('token');
    let headers1 = new HttpHeaders({"x-auth-token":token});
    return this.http.get("https://stark-thicket-13694.herokuapp.com/api/Users/MyList",{headers:headers1});
  }
}
