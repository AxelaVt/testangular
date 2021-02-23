import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {

  name: string = "Pomme de terre";
  description: string = "description";
  quantity: number = 200;
  unit: string = "kg";

  constructor(private productService: ProductService, private route: ActivatedRoute) { }
  
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    const selectedProduct = this.productService.getProductById(+id);
    console.log(selectedProduct);
    this.name = this.productService.getProductById(+id)!.name;
    this.description = this.productService.getProductById(+id)!.description;
    this.quantity = this.productService.getProductById(+id)!.quantity;
    this.unit = this.productService.getProductById(+id)!.unit;
}

}
