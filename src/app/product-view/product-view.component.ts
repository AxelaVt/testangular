import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  [x: string]: any;
  isAuth = false;
  added = false;
  date = new Date();
  cart = [];
  products!: any[];

  constructor(private productService: ProductService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
  this.products = this.productService.products;
  }

  goToCart() {
    
  }
}
