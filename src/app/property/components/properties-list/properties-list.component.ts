import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/property/services/store.service';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, private storeService: StoreService) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      data => {
        this.products = data;
      }
    )
  }





}
