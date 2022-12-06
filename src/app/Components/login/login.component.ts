import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private userService: UsersService,private router: Router, private jwtHelperService: JwtHelperService) {}
    
  
  ngOnInit(): void {}
  

 loginForm = new FormGroup({
  username: new FormControl("", [Validators.required]),
  password: new FormControl("",[
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(15)
  ]),
   
 });
   isUserValid = false
   loginsubmited() {
    this.userService.loginUser([this.loginForm.value.username, this.loginForm. value.password])
    .subscribe(res => {
      if (res == 'Failure'){
        this.isUserValid =false;
        alert('Login Unsucessful');
      }else {
        this.isUserValid=true;
        const decodeToken = this.jwtHelperService.decodeToken(res);
        localStorage.setItem("name", decodeToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"]);

 

          localStorage.setItem("role" , decodeToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);
      
       this.userService.setToken(res);
        this.router.navigate(['home'])
       // alert('Login sucessful');
      }
      
    }); 
    
  }
  setToken(token:string){
    localStorage.setItem("access_token", token);
  } 
  get Username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }
  get Password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
 
}




