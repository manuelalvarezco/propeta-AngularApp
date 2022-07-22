import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private showSnackBar = false;
  private products = '';
  private shoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor() {
    const count = this.getStoreProducts();
   }

  addProduct(product: Product){
    this.shoppingCart.push(product)
    this.setStoreProduct(this.shoppingCart);
    this.showSnackBar = true;
    this.myCart.next(this.shoppingCart);
  }

  removeProduct(id: number){
    this.shoppingCart.splice(id, 1);
    this.setStoreProduct(this.shoppingCart);
    this.showSnackBar = false;
    this.myCart.next(this.shoppingCart);
  }

  getShoppingCart(){
    return this.shoppingCart;
  }

  getTotal(){
    return this.shoppingCart.reduce((sum, item) => sum + item.price, 0);
  }


  setStoreProduct(products: Product[]){
    localStorage.setItem('cart_product', JSON.stringify(products));
  }

  getStoreProducts(){
    this.products = localStorage.getItem('cart_product') as string;
    return JSON.parse(this.products) ;
  }

  showSnack(){
    return this.showSnackBar;
  }


}
