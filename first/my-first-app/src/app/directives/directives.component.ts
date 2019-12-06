import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  toggleSecret = false;  
  clicks = [];


  constructor() { }

  ngOnInit() {
  }


  onToggleSecret(){
    this.toggleSecret = !this.toggleSecret;
    
    this.clicks.push(this.clicks.length+1);

  }

}
