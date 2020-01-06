import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInput : ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput : ElementRef;
  ingredient : Ingredient;

  @Output() onAddEvent = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    this.ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.onAddEvent.emit(this.ingredient);
  }

}
