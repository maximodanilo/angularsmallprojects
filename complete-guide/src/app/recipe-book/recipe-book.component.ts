import { Component, OnInit, Output } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe-book.service";

@Component({
  selector: "app-recipe-book",
  templateUrl: "./recipe-book.component.html",
  styleUrls: ["./recipe-book.component.css"]
})
export class RecipeBookComponent implements OnInit {
  recipeSelected: Recipe;

  constructor(private recipeService: RecipeService) {
    this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => {
      this.recipeSelected = recipe;
    });
  }

  ngOnInit() {
  }

  onHeaderItemClicked(itemClicked: string) {
    console.log("from AppComponent " + itemClicked);
  }
}
