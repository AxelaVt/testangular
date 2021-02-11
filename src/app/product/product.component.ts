import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productName: string = "Salade Batavia" ;
  productDescription: string = "salade de production locale";
  productQuantity: number = 10;
  productUnit: string = "pc";
  
  @Input()
  selectedQuantity!: number;

  constructor() {

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


  ngOnInit(): void {
  }

}
