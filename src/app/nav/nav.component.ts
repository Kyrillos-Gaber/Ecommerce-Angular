import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  counter = 0;

  // constructor(private counterService : CounterService) {}

  ngOnInit(): void {
    // this.counterService.counterValue.subscribe((res)=> this.counter = res);
  }

}
