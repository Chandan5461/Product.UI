import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
role : any = localStorage.getItem("role");
name : any = localStorage.getItem("name");


  constructor() { }
  title = 'ProductUI';
 
  isLoggedin(): boolean {
    return localStorage.getItem("access_token") ? true : false;
   }
}
