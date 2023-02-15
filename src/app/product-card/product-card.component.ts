import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {

  @Input() product : IProduct = {
    id: '',
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
  };

  ngOnInit(): void {
    
  }

}
