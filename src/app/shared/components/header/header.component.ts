import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpen = false;
  productsCount = 0;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.getShoppingCart();
  }

  openMenu(){
    this.isOpen = !this.isOpen;
  }

  getShoppingCart(){
    this.storeService.myCart$.subscribe( products => {
      this.productsCount = products.length;
    })
  }

}
