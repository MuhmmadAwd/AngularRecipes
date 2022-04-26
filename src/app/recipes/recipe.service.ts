import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(public _shoppingListService: ShoppingListService) {}
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'nameTest',
      'descTest',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [new Ingredient('egg', 5), new Ingredient('meat', 3)]
    ),
    new Recipe(
      '2nameTest',
      '2descTest',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [new Ingredient('buns', 1), new Ingredient('fries', 20)]
    ),
  ];

  public getRecipe() {
    return this.recipes.slice();
  }
  AddIngredientsToShoppingList(ingredients: Ingredient[]) {
    this._shoppingListService.addIngredients(ingredients)
  }
}
