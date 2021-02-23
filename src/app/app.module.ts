import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AuthGuard } from './services/auth-guard.service';
import { EditproductComponent } from './editproduct/editproduct.component';
import { UserService } from './services/user.service';
import { UserlistComponent } from './userlist/userlist.component';
import { NewUserComponent } from './new-user/new-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    AuthComponent,
    ProductViewComponent,
    SingleproductComponent,
    QuatrecentquatreComponent,
    EditproductComponent,
    UserlistComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

