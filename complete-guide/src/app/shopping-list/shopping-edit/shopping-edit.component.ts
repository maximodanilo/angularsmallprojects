import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', { static: false }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef;
  ingredient: Ingredient;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onAdd() {
    this.ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    console.log("ShoppingEditComponent onAdd()");
    this.shoppingService.addIngredientEvent.emit(this.ingredient);
  }

}
