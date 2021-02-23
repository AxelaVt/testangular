import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  constructor(private productService : ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const name = form.value['name'];
    const description = form.value['description'];
    const quantity = form.value['quantity'];
    const unit = form.value['unit'];
    this.productService.addProduct(name, description, quantity, unit);
    this.router.navigate(['/product']);
}

}
