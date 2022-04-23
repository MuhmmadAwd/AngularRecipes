import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [
    new Ingredient("egg",5),
    new Ingredient("apple",35),
  ]
  OnIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
