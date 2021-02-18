import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  productName!: string;
  @Input()
  productDescription!: string;
  @Input()
  productQuantity!: number;
  @Input()
  productUnit!: string;
  @Input()
  productId!: number;
  
  @Input()
  selectedQuantity!: number;

  isAuth = false;
  added = false;

  constructor(private productService: ProductService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }


  
  getName(){
    return this.productName;
  }

  getQuantity() {
    return this.productQuantity;
  }

  getUnit(){
    return this.productUnit;
  }

  getDescription(){
    return this.productDescription;
  }

  addCart() {
    this.added = true;
    if(this.selectedQuantity == 1){
      alert(this.selectedQuantity + ' ' + this.productUnit +'  de produit ajouté au panier !');
    }else{
      alert(this.selectedQuantity + ' ' + this.productUnit + ' de produits ajoutés au panier !');
    }
    
  }

  ngOnInit(): void {
  }

}
