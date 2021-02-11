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

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  addCart() {
    this.added = true;
    alert('Produit ajouter au panier !');
    // console.log('Produit ajouter au panier !');
  }

}
