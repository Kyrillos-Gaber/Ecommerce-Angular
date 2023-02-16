import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http : HttpClient) { }

  getProductsList() : Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getProductById(id : any) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
