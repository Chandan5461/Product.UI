import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[]=[];
  constructor(private  userService: UsersService, private router: Router) { }
 
  ngOnInit(): void {
    this. userService.getAllProduct()
    .subscribe({ next: (product) =>
       {
        this.products = product;
        for(var i = this.products.length-1; i >=0 ; --i) {

          if (this.products[i].status!='Approve') {

            this.products.splice(i, 1);

          }

        }
        console.log(this.products);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
 
}