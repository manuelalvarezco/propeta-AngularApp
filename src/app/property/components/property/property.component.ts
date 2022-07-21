import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent {

  @Input() product: Product = {
    id : 1,
    category : '',
    image : '',
    description : '',
    price : 0,
    rating : { rate: 0, count: 0},
    title : '',
  }

  constructor(private storeService: StoreService) { }

  addToCart(product: Product){
    this.storeService.addProduct(product);
  }


}
