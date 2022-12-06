import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  userDetails: User={
    id:0,
    name: '',
    address:'',
    city:'',
    role:'',
    username:'',
    password:''
  };
  constructor(private route: ActivatedRoute,private usersService: UsersService,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (param) => {
        const id = param.get('id');

        if (id) {
          this.usersService.getUser(id)
          .subscribe({
            next: (response) => {
              this.userDetails = response;
              //console.log(this.userDetails)

            }
          });
        }
      }
    })
  }
  updateUser(){
    this.usersService.updateUser(this.userDetails.id, this.userDetails)
    .subscribe({
      next: (respnse) => {
        this.router.navigate(['user']);
      }
    });
  }
  deleteUser(id:number){
    this.usersService.deleteUser(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['user']);
      }
    });
  }

}
