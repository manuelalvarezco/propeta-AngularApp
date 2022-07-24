import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../../property/services/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit{

  product = new FormControl('', []);
  products: Product[] = [];
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.product.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe( product => {
        this.productService.getProducts().subscribe(
          products => {
            this.products = products;
          }
        )
      })
  }
  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      products => {
        this.selectedProducts = products;
      }
    )
  }

  OnchangeInput(){
    console.log('val', this.product.value);
    this.products = []
  }

}
