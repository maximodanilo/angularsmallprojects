import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

  ingredientsToShoppingListEvent = new EventEmitter<Ingredient[]>();
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Escondidinho",
      "Potato cream and ground beaf",
      "https://abrilmdemulher.files.wordpress.com/2018/01/escondidinho-de-carne-moida.jpg?quality=90&strip=info&w=768&h=512&crop=1",
      [
        { name: "Potato", amount: 2 },
        { name: "Ground beef", amount: 4 },
      ]
    ),
    new Recipe(
      "Bolinha de queijo",
      "A fried special dough stuffed with cheese",
      "https://img.itdg.com.br/tdg/images/recipes/000/165/285/284443/284443_original.jpg?mode=crop&width=710&height=400",
      [
        { name: "Cheese", amount: 20 },
        { name: "Flour", amount: 10 },
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
