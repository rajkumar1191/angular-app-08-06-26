import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {

  products = [
    {
      id: 100,
      name: 'ABC',
      price: 123,
    },
    {
      id: 101,
      name: 'ABC',
      price: 123,
    },
    {
      id: 102,
      name: 'ABC',
      price: 123,
    },
    {
      id: 103,
      name: 'ABC',
      price: 123,
    },
    {
      id: 104,
      name: 'ABC',
      price: 123,
    },
    {
      id: 105,
      name: 'ABC',
      price: 123,
    },
  ];

  product:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    console.log(this.route.snapshot.paramMap.get('id'));
    console.log(this.route.snapshot.queryParamMap.get('name'));
    this.route.params.subscribe((params: any) => {
      console.log(params);
      if(params.id){
        this.product = this.products.find((product)=> product.id == params.id);
        console.log(this.product)
      }
    });

    this.route.queryParams.subscribe((params) => {
      console.log(params);
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
