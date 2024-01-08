import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  //
  private apiurl = 'https://fakestoreapi.com/products';
  //

  constructor(private http: HttpClient) { }

  ///
  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiurl);
  }


  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>('https://fakestoreapi.com/products/' + id.toString());
  }


}
