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
    let password = this.passWordFormControl.value;
    let userName = this.userNameFormControl.value;
   this.signInService.signIN(userName,password).subscribe(res=>{

  });// for back end
  var Success =true; 
   if (Success)
   {
     this.router.navigateByUrl("List");

   }
   else 
   {

   }

  }
  ngOnInit() {
  }

}
