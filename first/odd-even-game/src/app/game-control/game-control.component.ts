import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  myVar = null;
  currentNumber: number = 0;
  @Output() incrementEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onStart() {
    console.log("start");
    if (this.myVar == null) {
      this.myVar = setInterval(() => {
        this.currentNumber++;
        this.incrementEvent.emit(this.currentNumber)
        console.log("after emit");
      }, 1000);
    } else {
      console.log("Already running");
    }
  }

  onStop() {
    console.log("pause");
    if (this.myVar != null) {
      clearInterval(this.myVar);
      this.myVar = null;
    } else {
      console.log("Start first");
    }
  }
}
