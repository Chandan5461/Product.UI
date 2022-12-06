import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
   products: Product[]=[];
  constructor(private productsService: UsersService) { }
 
  ngOnInit(): void {
    this.productsService.getAllProduct()
    .subscribe({ next: (product) =>
       {
        this.products = product;
        console.log(this.products);
      },
      error: (response) => {
        console.log(response);
      }
    })
    //this.product.push()
     
    }
}


