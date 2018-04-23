import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';


export class RecipeService {

  recipes: Recipe[] = [
  new Recipe('Quiche', 'A...something quiche', 'https://upload.wikimedia.org/wikipedia/commons/2/29/Quiche.jpg',
    [new Ingredient('Cheese', 3), new Ingredient('Spinach',2), new Ingredient('Bacon', 1)]),
  new Recipe('Hamburger', 'A beef hamburger', 'https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg',
    [new Ingredient('Beef', 3), new Ingredient('Buns', 2), new Ingredient('Salt',1)])];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(){
    return this.recipes.slice();
  }

  constructor() { }



}
