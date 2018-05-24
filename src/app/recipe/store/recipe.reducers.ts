import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';

export interface FeatureState {
  recipes: State
}

export interface State {
  recipes: Recipe[]
}

const initialState: State = {
  recipes: [
  new Recipe('Quiche', 'A...something quiche', 'https://upload.wikimedia.org/wikipedia/commons/2/29/Quiche.jpg',
    [new Ingredient('Cheese', 3), new Ingredient('Spinach', 2), new Ingredient('Bacon', 1)]),
  new Recipe('Hamburger', 'A beef hamburger', 'https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg',
    [new Ingredient('Beef', 3), new Ingredient('Buns', 2), new Ingredient('Salt', 1)])]
};

export function recipeReducer(state = initialState, action) {
  switch(action.type) {
    case RecipeActions.REPLACE_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };
    case RecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, ...action.payload]
      };
    case RecipeActions.DELETE_RECIPE:
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload.index, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    case RecipeActions.UPDATE_RECIPE:
      // Expand all recipes into full recipe array.
      const recipes = [...state.recipes];
      recipes[action.payload.index] = action.payload.recipe;
      return {
        ...state,
        recipes: recipes
      };

    default: return state;
  }
}
