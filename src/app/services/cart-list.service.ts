import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../interfaces/i-product';

@Injectable({
  providedIn: 'root'
})

export class CartListService {
  private cartData = new BehaviorSubject<IProduct[]>([]);
  cartList = this.cartData.asObservable();

  constructor() { }

  getCartItem(product : IProduct) {
    if ( ! this.cartData.value.find((pdct) => pdct.id == product.id) )
      this.cartData.next( this.cartData.getValue().concat([product]) );
  }

}
