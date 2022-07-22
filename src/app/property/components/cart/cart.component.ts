import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  products: Product[] = [];
  total: number = 0;

  constructor(private storeService: StoreService) { }
  ngOnInit(): void {
    this.products = this.storeService.getStoreProducts();
    this.getPrice()
  }


  quit(product: Product){
    const item = this.products.findIndex(item => item.id === product.id);
    this.products.splice(item, 1);
    this.storeService.removeProduct(item);
  }

  getPrice(){
    this.storeService.myCart$.subscribe( products => {
      this.total = products.reduce((sum, item) => sum + item.price, 0);
    })
  }
}
