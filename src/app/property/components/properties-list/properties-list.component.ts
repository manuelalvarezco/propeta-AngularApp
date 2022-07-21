import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent implements OnInit {

  isAdded = false;
  products: Product[] = [];

  constructor(private productService: ProductService, private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProducts();
    this.storeService.myCart$.subscribe(
      products => {
        if(products.length > 0){
          this.isAdded = true;
        }
      }
    )
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      data => {
        this.products = data;
      }
    )
  }

  quitSnackbar(){
    this.isAdded = false;
  }



}
