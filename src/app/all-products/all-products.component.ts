import { Component, Input } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent {

  products : IProduct[] = [];

  constructor(private productsList : ProductsService) {}

  ngOnInit() : void {
    this.productsList.getProductsList().subscribe((res)=> {
      this.products = res;
    });
  }

}
