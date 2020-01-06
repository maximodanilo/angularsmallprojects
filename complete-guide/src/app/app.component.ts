import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  itemClicked: string = "home";

  onHeaderItemClicked(itemClicked: string) {
    this.itemClicked = itemClicked;
  }
}
