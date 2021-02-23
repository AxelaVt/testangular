import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { QuatrecentquatreComponent } from './quatrecentquatre/quatrecentquatre.component';
import { AuthGuard } from './services/auth-guard.service';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
{ path: 'product', component: ProductViewComponent },
{ path: 'product/:id', component: SingleproductComponent},
{ path: 'edit', canActivate: [AuthGuard],component: EditproductComponent},
{ path: 'auth', component: AuthComponent },
{ path: 'users', canActivate: [AuthGuard], component: UserlistComponent},
{ path: 'new-user', component: NewUserComponent },
{ path: 'cart', canActivate: [AuthGuard], component: CartComponent},
//{ path: 'product/cart', component: CartComponent},
{ path: '', component: ProductViewComponent },
// { path: '', redirectTo: 'product' },
{ path: 'not-found', component: QuatrecentquatreComponent },
{ path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
