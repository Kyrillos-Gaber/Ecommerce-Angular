import { Component, OnInit, Output } from '@angular/core';
import { CartListService } from '../services/cart-list.service';
import { IProduct } from '../interfaces/i-product';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartList : Array<IProduct> = [];
  totalPrice = 0;

  counter : Array<any> = [];
  totalQty = 0;

  constructor(
    private cartListSer : CartListService,
    private allCounter : CounterService
  ) {}

  ngOnInit(): void {
    this.allCounter.counterValue.subscribe((res)=> this.totalQty = res);
    this.cartListSer.cartList.subscribe((res) => this.cartList = res);
    for (let i = 0; i < this.cartList.length; i++ ) {
      this.totalPrice += parseInt(this.cartList[i].price) * parseInt(this.counter[i]);
    }
  }

  reciveFromChild(event : any) {
    this.counter.push(event);
    console.log(event);
  }

  ngOnChanges(changes : any) {
    console.log(changes);
  }

}
