import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
   users: User[] = [];
   role: any=localStorage.getItem("role");
  constructor(private usersService: UsersService,) { }

  ngOnInit(): void {
    this.usersService.getAllUsers()
    .subscribe({
      next: (user) => {
       this.users = user;
        
      },
      error: (response) => {
        console.log(response);
      }
    });

    //this.user.push()

  }
  isManager(value:string){

    if(localStorage.getItem("role")==value){

      return false;

    }

    return true

  }

}
