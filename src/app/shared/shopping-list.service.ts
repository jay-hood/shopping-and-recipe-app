import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)];

  constructor() { }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice());
  }
  ingredientAdded = new EventEmitter<Ingredient[]>();

  getIngredients(){
    return this.ingredients.slice();
  }

  exportIngredientsFromRecipe(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientAdded.emit(this.ingredients.slice());
  }

}
