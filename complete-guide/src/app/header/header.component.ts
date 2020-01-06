import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  recipesVisible: boolean = false;
  shoppingVisible: boolean = false;

  @Output() headerItemClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onItemClick(itemClicked: string) {
    this.headerItemClicked.emit(itemClicked);
    console.log("after emit");
  }
}
