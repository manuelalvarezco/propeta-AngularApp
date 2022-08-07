import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../shared/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  product: Product = {
    category:'',
    description:'',
    image: '',
    price: 0,
    rating: {
      rate: 0,
      count: 0
    },
    title: ''
  };
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private storeService: StoreService
    ) {

    }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id')
    this.getProduct(id);
    window.scroll(0,0)
  }

  getProduct(id:string){
    return this.productService.getProduct(id).subscribe(
      product => {
        this.product = product;
      }
    )
  }

  addToCart(){
    this.storeService.addProduct(this.product);
  }
}
