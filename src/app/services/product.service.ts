import { Subject } from "rxjs/internal/Subject";
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {

  productsSubject = new Subject<any[]>();
  
private products : any = [];
  

  constructor(private httpClient: HttpClient) { }

  emitProductSubject() {
    this.productsSubject.next(this.products.slice());
  }

  getProductById(id: number) {
    const product = this.products.find(
      (productObject: { id: number; }) => {
        this.emitProductSubject();
        return productObject.id === id;
        
      }
    );
     console.log(product);
     this.emitProductSubject();
    return product;
     
  }

  addProduct(name: string, description: string, quantity: number, unit: string) {
    
    const productObject = {
      id: 0,
      name: '',
      description: '',
      quantity: 0 ,
      unit: ''
    };
    productObject.name = name;
    productObject.description = description;
    productObject.quantity = quantity;
    productObject.unit = unit;
    productObject.id = this.products[(this.products.length - 1)].id + 1;
    this.products.push(productObject);
    this.emitProductSubject();
  }

  saveProductsToServer() {
    this.httpClient
      .put('https://testangular-4f45a-default-rtdb.europe-west1.firebasedatabase.app/products.json', this.products)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getProductsFromServer() {
    this.httpClient
      .get<any[]>('https://testangular-4f45a-default-rtdb.europe-west1.firebasedatabase.app/products.json')
      .subscribe(
        (response) => {
          this.products = response;
          console.log(response);
          this.emitProductSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }



}