import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter-Application';
  count = 0;

  reset() {
    this.count = 0;
  }

  increment() {
    this.count = this.count+1;
    if(this.count == 11){
      this.count = this.count-1
    }
  }

  decrement() {
    this.count = this.count-1;
    if(this.count == -1){
      this.count = this.count+1
    }
  }
}
