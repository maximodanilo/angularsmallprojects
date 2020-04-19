import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app/app.component";
import { HeaderComponent } from "./app/header/header.component";
import { ShoppingListComponent } from "./app/shopping-list/shopping-list.component";
import { RecipeBookComponent } from "./app/recipe-book/recipe-book.component";
import { RecipeItemComponent } from "./app/recipe-book/recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./app/recipe-book/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./app/recipe-book/recipe-detail/recipe-detail.component";
import { ShoppingEditComponent } from "./app/shopping-list/shopping-edit/shopping-edit.component";
import { HomeComponent } from "./app/home/home.component";
import { DropdownDirective } from "./app/shared/dropdown.directive";
import { ShoppingService } from './app/shopping-list/shopping.service';
import { RecipeService } from './app/recipe-book/recipe-book.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingEditComponent,
    HomeComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule],
  providers: [ShoppingService, RecipeService],
  bootstrap: [AppComponent],

})
export class AppModule { }
