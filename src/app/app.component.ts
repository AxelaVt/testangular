import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuto';
  isAuth = false;
  added = false;
  date = new Date();

  products = [
    {
      name: 'Salade Batavia',
      description:"salade produite localement",
      quantity: 5,
      unit:'pc',
    },
    {
      name: 'Tomate bio',
      description: 'Tomate du producteur tartenpion',
      quantity: 10,
      unit:'kg',
    },
    {
      name:'Pomme gala',
      description: 'Pomme à maturité, produite par mr rererer, producteur régional',
      quantity: 20,
      unit:'kg',
    }

  ]

  // constructor() {
  //   setTimeout(
  //     () => {
  //       this.isAuth = true;
  //     }, 4000
  //   );
  // }

  // addCart() {
  //   this.added = true;
  //   alert('Produit ajouter au panier !');
  //   // console.log('Produit ajouter au panier !');
  // }

}
