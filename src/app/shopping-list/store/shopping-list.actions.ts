import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const GET_INGREDIENT_FROM_INDEX = 'GET_INGREDIENT_FROM_INDEX';
export const GET_ALL_INGREDIENTS = 'GET_ALL_INGREDIENTS';
export const ADD_INGREDIENTS_FROM_RECIPE = 'ADD_INGREDIENTS_FROM_RECIPE';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const ADD_INGREDIENTS_TO_SHOPPING_LIST = 'ADD_INGREDIENTS_TO_SHOPPING_LIST';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;

  constructor(public payload: Ingredient) {

  }

}
export class GetIngredientsFromIndex implements Action {
  readonly type = GET_INGREDIENT_FROM_INDEX;

  constructor(public payload: Ingredient) {

  }

}
export class GetAllIngredients implements Action {
  readonly type = GET_ALL_INGREDIENTS;

  constructor(public payload: Ingredient[]) {

  }

}
export class AddIngredientsToShoppingList implements Action {
  readonly type = ADD_INGREDIENTS_TO_SHOPPING_LIST;

  constructor(public payload: Ingredient[]) {

  }

}
export class AddIngredientsFromRecipe implements Action {
  readonly type = ADD_INGREDIENTS_FROM_RECIPE;

  constructor(public payload: Ingredient[]) {

  }

}
export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENT;

  constructor(public payload: {index: number, ingredient: Ingredient}) {

  }

}
export class RemoveIngredient implements Action {
  readonly type = REMOVE_INGREDIENT;

  constructor(public payload: number) {

  }

}

export type ShoppingListActions = AddIngredient | AddIngredientsFromRecipe |
AddIngredientsToShoppingList | UpdateIngredient | RemoveIngredient;
