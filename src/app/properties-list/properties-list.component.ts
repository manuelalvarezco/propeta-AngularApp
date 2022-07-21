import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent implements OnInit {

  products: Product[] = [];

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.getProducts()
  }


  getProducts(){
    this.propertyService.getProducts().subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
