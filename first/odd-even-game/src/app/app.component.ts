import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'odd-even-game';
  oddNumbers = [];
  evenNumbers = [];

  onIncrement(currentNumber : number){
    if(currentNumber % 2 === 0 ){
      this.evenNumbers.push(currentNumber);
    }else{
      this.oddNumbers.push(currentNumber);
    }
    console.log("app-component printing current number:" + currentNumber);
  }

}
