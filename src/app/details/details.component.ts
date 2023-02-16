import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../interfaces/i-product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private products : IProduct[] = [];

  selected : IProduct = {
    id: '',
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
  } ;

  id = "0";

  constructor (
      private route : ActivatedRoute,
      private productsList : ProductsService
    ) {}
  
  ngOnInit(): void {
    this.id  = this.route.snapshot.params['id'];
    console.log(this.id);
    // console.log( this.products.find((product) => product.id == this.id) );
    // this.selected = this.products.find( (product) => product.id == this.id );
    this.productsList.getProductById(this.id).subscribe(res => {
      // this.selected = res;
      console.log(this.selected);
    });
    
  }

  

  

}
