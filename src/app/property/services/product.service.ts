import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = '/api/getLocations?limit=25&pageNo=1&search=C';

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>('https://fakestoreapi.com/products?limit=5');
  }

  getProduct(id:string){
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }


  getProperties(){
    return this.http.get(this.apiUrl);
  }
}
