import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { QuatrecentquatreComponent } from './quatrecentquatre/quatrecentquatre.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';

const routes: Routes = [
{ path: 'product', component: ProductViewComponent },
{ path: 'product/:id', component: SingleproductComponent},
{ path: 'auth', component: AuthComponent },
{ path: '', component: ProductViewComponent },
{ path: 'not-found', component: QuatrecentquatreComponent },
{ path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
