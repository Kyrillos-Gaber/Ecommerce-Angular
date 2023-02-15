import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { ActivatedRoute } from '@angular/router';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {

  counter = 0;

  productCounter = 0;

  @Input() product : IProduct = {
    id: '',
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
  };

  constructor(private counterService : CounterService) {}

  ngOnInit(): void {
    this.counterService.counterValue.subscribe((res)=> this.counter = res);
  }

  increaseCounter() {
    this.productCounter++;
    this.counterService.updateCounter(this.productCounter + this.counter);
  }
  
  decreaseCounter() {
    this.productCounter--;
    this.counterService.updateCounter(this.counter - this.productCounter);
  }

}
