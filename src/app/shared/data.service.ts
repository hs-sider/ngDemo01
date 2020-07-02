import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products = [
    {
      id: 1,
      name: 'Egg',
      category: 'Food',
      description: 'Lorem egg',
      price: 1
    },
    {
      id: 2,
      name: 'Rice',
      category: 'Food',
      description: 'Lorem rice',
      price: 0.5
    },
    {
      id: 3,
      name: 'Coca Cola',
      category: 'Drink',
      description: 'Lorem coke',
      price: 2.5
    }
  ]

  getAllProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.filter((product) => product.id == id);
  }
}
