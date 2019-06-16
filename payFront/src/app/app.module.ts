import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignInService } from './services/sign-in.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoService } from './services/todo.service';
import { MatListModule ,MatButtonModule  ,MatIconModule , MatCardModule, MatToolbarModule, MatFormFieldModule} from "@angular/material"
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes =[{ path:"",component:SignInComponent},{path:"List",component:TodoComponent}]


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule, 
    MatListModule, 
    BrowserAnimationsModule,
    MatButtonModule ,
    MatIconModule, 
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule, 
    RouterModule.forRoot(routes,{onSameUrlNavigation:"reload"}),
    HttpClientModule

  ],
  providers: [
    TodoService,
    SignInService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
