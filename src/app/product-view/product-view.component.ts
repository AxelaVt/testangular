import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, OnDestroy{
  [x: string]: any;
  isAuth = false;
  added = false;
  date = new Date();
  cart = [];
  products!: any[];
  productSubscription!: Subscription;

  constructor(private productService: ProductService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.productSubscription = this.productService.productsSubject.subscribe(
      (products: any[]) => {
        this.products = products;
      });
      this.productService.emitProductSubject();
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
  
}
