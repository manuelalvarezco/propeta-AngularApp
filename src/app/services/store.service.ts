import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private shoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor() { }

  addProduct(product: Product){
    this.shoppingCart.push(product)
    this.myCart.next(this.shoppingCart);
  }

  getShoppingCart(){
    return this.shoppingCart;
  }

  getTotal(){
    return this.shoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
