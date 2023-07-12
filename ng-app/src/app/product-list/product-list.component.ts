import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product = {
    id: 1,
    name: "IPhone 15",
    price: 20000,
    imageUrl: "1.jpeg",
    description: "Zor Telefon",
    isActive: true
  }

  productList = ["IPhone 14", "IPhone 15", "IPhone 16", "IPhone 17"]
  products = [
    {
      id: 1,
      name: "IPhone 14",
      price: 20000,
      imageUrl: "1.jpeg",
      description: "Zor Telefon",
      isActive: true
    },
    {
      id: 2,
      name: "IPhone 15",
      price: 20000,
      imageUrl: "1.jpeg",
      description: "Zor Telefon",
      isActive: true
    },
    {
      id: 3,
      name: "IPhone 16",
      price: 20000,
      imageUrl: "1.jpeg",
      description: "Zor Telefon",
      isActive: true
    }
  ]
}
