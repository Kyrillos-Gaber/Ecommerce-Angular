import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counterData = new BehaviorSubject(1);
  counterValue = this.counterData.asObservable();

  constructor() { }

  updateCounter(newVal : number) {
    this.counterData.next(newVal);
  }
}
