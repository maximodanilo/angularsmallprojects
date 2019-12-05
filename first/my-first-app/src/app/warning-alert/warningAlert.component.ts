import { Component } from "@angular/core";

@Component({
  selector: "warning-alert",
  template: "<p class='warning-alert'>Warning message</p>",
  styles: [
    `
      .warning-alert {
        color: orange;
        border: 1px solid orange;
        padding: 5px;
      }
    `
  ]
})
export class WarningAlertComponent {}
