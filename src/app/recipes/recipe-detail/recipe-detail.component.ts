import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id:number;
  constructor(
    public _recipeService: RecipeService,
    public route: ActivatedRoute
  ) {}
  OnAddToShoppingList() {
    this._recipeService.AddIngredientsToShoppingList(this.recipe.ingredients);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params["id"]
      this.recipe = this._recipeService.getRecipe(this.id);
    })
  }
}
