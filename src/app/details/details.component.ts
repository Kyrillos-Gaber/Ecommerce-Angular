import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../interfaces/i-product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private products : IProduct[] = [];

  @Input() selected : any ;

  @Input() id = "0";

  constructor (private route : ActivatedRoute) {
  }
  
  ngOnInit(): void {
    this.id  = this.route.snapshot.params['id'];
    console.log( this.products.find((product) => product.id == this.id) );

    this.selected = this.products.find( (product) => product.id == this.id );
    
  }

}
