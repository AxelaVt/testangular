import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productName!: string;
  @Input() productDescription!: string;
  @Input() productQuantity!: number;
  @Input() productUnit!: string;
  
  @Input()
  selectedQuantity!: number;

  isAuth = false;
  added = false;

  constructor() {
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
    alert('Produit ajouter au panier !');
    // console.log('Produit ajouter au panier !');
  }

  ngOnInit(): void {
  }

}
