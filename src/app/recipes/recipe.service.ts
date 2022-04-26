import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }
  recipeSelected = new EventEmitter<Recipe>()
  private recipes:Recipe[] = [
      new Recipe("nameTest","descTest","https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg"),
      new Recipe("2nameTest","2descTest","https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg")
    ]
    
  public getRecipe(){
    return this.recipes.slice()
  }
    
    
  }
