import { Subject } from "rxjs/internal/Subject";

export class ProductService {

  productsSubject = new Subject<any[]>();

private products = [
    {
      id : 1,
      name: 'Salade Batavia',
      description:"salade produite localement",
      quantity: 50,
      unit:'pc',
    },
    {
      id : 2,
      name: 'Tomate bio',
      description: 'Tomate du producteur tartenpion',
      quantity: 10,
      unit:'kg',
    },
    {
      id : 3,
      name:'Pomme gala',
      description: 'Pomme à maturité, produite par mr rererer, producteur régional',
      quantity: 20,
      unit:'kg',
    },
    {
      id : 4,
      name:'Pâte spagetti',
      description: 'Pâte de fabrication française avec de la farine de blé produite en France, paquet de 500g',
      quantity: 200,
      unit:'pc',
    }

  ]
  emitProductSubject() {
    this.productsSubject.next(this.products.slice());
  }

getProductById(id: number) {
    const product = this.products.find(
      (productObject) => {
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



}