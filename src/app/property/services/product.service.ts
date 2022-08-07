import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Product } from 'src/app/shared/models/product.model';
import { retry } from 'rxjs';
import { checkTime } from 'src/app/auth/interceptor/time.interceptor';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = '/api/getLocations?limit=25&pageNo=1&search=C';

  constructor(private http: HttpClient) { }

  getProducts(){
    let params = new HttpParams();

    return this.http.get<Product[]>('https://fakestoreapi.com/products?limit=5', {context: checkTime()})
      .pipe(
        retry(3)
      )
  }

  getProduct(id:string){
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }


  getProperties(){
    return this.http.get(this.apiUrl);
  }
}
