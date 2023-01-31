import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  serviceCount:number=100;
  constructor() { }
  addOne() {
    this.serviceCount++;
  }
}
