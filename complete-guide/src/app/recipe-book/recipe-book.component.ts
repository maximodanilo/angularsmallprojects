import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  @Output() recipeSelected : Recipe;

  constructor() { }

  ngOnInit() {
  }

  onHeaderItemClicked(itemClicked : string){
    console.log("from AppComponent " + itemClicked);
  }

  setRecipeSelected(recipe : Recipe){
    this.recipeSelected = recipe;
  }

}
