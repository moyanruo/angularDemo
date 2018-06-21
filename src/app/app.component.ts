import { Component } from '@angular/core';
import { TestService } from './test.service'

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})

export class AppComponent {
  title = 'app';
  constructor (private service : TestService) {
    service.hello()
  }
}
