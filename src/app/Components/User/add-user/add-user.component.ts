import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'add user-add user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserRequest: User = {
    id:0,
    name: '',
    address:'',
    city:'',
    role:'',
    username:'',
    password:''

  }; 
  constructor(private usersService: UsersService,private router: Router) { }

  ngOnInit(): void {
  }
  addUser(){
    this.usersService.addUser(this.addUserRequest)
    .subscribe({
      next: (user) => {
        this.router.navigate(['user']);
        
      }
    });
  }

}
