import { Component, OnInit, Output, Input } from "@angular/core";
import { Recipe } from "./../../recipe-book/recipe.model";
import { RecipeService } from "./../../recipe-book/recipe-book.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeSelected: Recipe;

  constructor(private recipeService: RecipeService) {

  }

  addToShoppingList(recipe: Recipe) {
    this.recipeService.ingredientsToShoppingListEvent.emit(recipe.ingredients);
  }

  ngOnInit() {
  }
}
