import { Component, OnInit } from '@angular/core';
import { Product } from './shared/models/product.model';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isAdded = false;

  constructor(private storeService: StoreService){}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(
      products => {
        console.log('products', products.length);
        if(products.length > 0){
          this.isAdded = true;
        }
      }
    )
  }


  quitSnackbar(){
    console.log('log padre');

    this.isAdded = false;
  }
}
