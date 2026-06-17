import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
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
}
