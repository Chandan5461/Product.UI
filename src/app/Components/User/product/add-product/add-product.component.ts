import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

   addProductRequest: Product ={
    id: 0,
    name:'',
    quantity:0,
    price:0,
    status:'',
   };
  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  addProduct() {
    this.userService.addProduct(this.addProductRequest)
    .subscribe({
      next: (product) => {
        this.router.navigate(['product']);
      }
    });
  }

}
