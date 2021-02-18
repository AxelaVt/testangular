
export class ProductService {

products = [
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


getProductById(id: number) {
    const product = this.products.find(
      (productObject) => {
        return productObject.id === id;
      }
    );
     console.log(product);
    return product;
     
}



}