import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productDetails: Product = {
    id:0,
    name:'',
    quantity:0,
    price:0,
    status:'',
  };
  constructor(private route: ActivatedRoute,private userService: UsersService,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (param) => {
        const id = param.get('id');

        if (id) {
          this.userService.getProduct(id)
          .subscribe({
            next: (response) => {
              this.productDetails =response;

            }
          })

        }
      }
    });
  }
  updateProduct(){
    this.userService.updateProduct(this.productDetails.id, this.productDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['product']);
      }
    });
  }
  deleteProduct(id: number){
    this.userService.deleteProduct(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['product']);
      }
    })
  }
}
  


