import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription:Subscription

  constructor(public _shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this._shoppingListService.getIngredients();
    this.subscription = this._shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  onEditItem(index:number){
    this._shoppingListService.startingEditing.next(index);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
