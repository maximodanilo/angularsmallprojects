import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from './shopping.service';
import { RecipeService } from '../recipe-book/recipe-book.service';

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingService, private recipeService: RecipeService) {
    this.shoppingService.addIngredientEvent.subscribe(
      (ingredient: Ingredient) => {
        this.shoppingService.addIngredient(ingredient);
      });

    this.recipeService.ingredientsToShoppingListEvent.subscribe(
      (ingredients: Ingredient[]) => {
        shoppingService.addIngredients(ingredients);
      })
    this.shoppingService.ingredientChangedEvent.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      })

  }

  ngOnInit() {
    console.log("shopping INIT method");
    this.ingredients = this.shoppingService.getIngredients();

  }

}
