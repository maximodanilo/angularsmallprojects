import { Component, OnInit } from "@angular/core";
import { Recipe } from "./../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Escondidinho",
      "Potato cream and ground beaf",
      "https://abrilmdemulher.files.wordpress.com/2018/01/escondidinho-de-carne-moida.jpg?quality=90&strip=info&w=768&h=512&crop=1"
    ),
    new Recipe(
      "Bolinha de queijo",
      "A fried special dough stuffed with cheese",
      "https://img.itdg.com.br/tdg/images/recipes/000/165/285/284443/284443_original.jpg?mode=crop&width=710&height=400"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
