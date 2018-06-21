import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  hello () {
    console.log('Hello Sevice')
  }
}
