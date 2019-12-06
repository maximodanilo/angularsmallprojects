import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowAddServer = false;
  servers = ["Server 1", "Server 2"];

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }

  ngOnInit() {}

  username : String;

  onClickClear(){
    this.username = "";
  }

  onClickAddServer(){
    this.servers.push("Server")
  }

}
