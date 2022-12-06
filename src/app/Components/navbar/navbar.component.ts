import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  role : any = localStorage.getItem("role");
  name : any = localStorage.getItem("name");
  constructor(private  userService: UsersService, private router: Router) { }
  logOut(){
    this. userService.removeToken();
    localStorage.removeItem("name");

    localStorage.removeItem("role");
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {
  }


}
