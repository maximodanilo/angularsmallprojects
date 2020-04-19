import { Component, OnInit, Output, Input } from "@angular/core";
import { Recipe } from "../../recipe.model";
import { RecipeService } from "./../../../recipe-book/recipe-book.service";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() { }

  recipeSelected(recipe: Recipe) {
    this.recipeService.selectedRecipe.emit(this.recipe);
    console.log("recipe " + recipe.name)
  }
}
