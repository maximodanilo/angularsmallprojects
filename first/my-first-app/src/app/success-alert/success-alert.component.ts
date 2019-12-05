import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-success-alert",
  templateUrl: "./success-alert.component.html",
  styles: [
    `
      .success-alert {
        color: green;
        border: 1px solid green;
        padding: 5px;
      }
    `
  ]
})
export class SuccessAlertComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
