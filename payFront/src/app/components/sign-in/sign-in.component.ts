import { SignInService } from './../../services/sign-in.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  passWordFormControl = new FormControl("")
  userNameFormControl = new FormControl("")
  constructor(private signInService:SignInService, private  router:Router) {
  }
  
  signIn()
  { 
    var Success =false; 
 
    let password = this.passWordFormControl.value;
    let userName = this.userNameFormControl.value;
   this.signInService.signIN(userName,password).subscribe((res)=>{
    if (res[0].length)
    {
      Success=true;
    var Xtoken = res[0].token
    localStorage.setItem('token',Xtoken);
    }
  });// for back end
   
  if (Success)
   {
     this.router.navigateByUrl("List"); // mve to the list page 

   }
   else 
   {

   }

  }
  ngOnInit() {
  }

}
