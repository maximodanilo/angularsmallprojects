import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingService {

    ingredientChangedEvent = new EventEmitter<Ingredient[]>();
    addIngredientEvent = new EventEmitter<Ingredient>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatos", 15),
        new Ingredient("Patotoes", 1)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChangedEvent.emit(this.ingredients);
        console.log("ShoppingService: Ingredients length: " + this.ingredients.length)
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChangedEvent.emit(this.ingredients.slice());
        console.log("ShoppingService: IngredientSSSSS added. new length: " + this.ingredients.length)
    }


}
