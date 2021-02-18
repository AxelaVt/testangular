import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { AuthComponent } from './auth/auth.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { AuthService } from './services/auth.service';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { ProductService } from './services/product.service';
import { QuatrecentquatreComponent } from './quatrecentquatre/quatrecentquatre.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    AuthComponent,
    ProductViewComponent,
    SingleproductComponent,
    QuatrecentquatreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ProductService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

