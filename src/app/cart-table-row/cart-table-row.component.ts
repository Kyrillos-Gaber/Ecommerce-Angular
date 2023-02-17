import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-cart-table-row',
  templateUrl: './cart-table-row.component.html',
  styleUrls: ['./cart-table-row.component.css']
})
export class CartTableRowComponent {
  @Input() item : IProduct = {
    id: '',
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
  };

  counter = 0;

  @Output() outCounter = new EventEmitter();

  constructor(private counterService : CounterService) {}

  sendToParent() {
    this.outCounter.emit(this.counter);
  }

  increaseCounter() {
    this.counter++;
    this.counterService.updateCounter(++this.counter);
  }

  decreaseCounter() {
    this.counter--;
    this.counterService.updateCounter(--this.counter);
  }

}
