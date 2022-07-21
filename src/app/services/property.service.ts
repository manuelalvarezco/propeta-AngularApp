import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) {}

  getProducts(){
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
