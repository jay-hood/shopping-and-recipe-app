import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  recipes: Recipe[] = [
  new Recipe('Quiche', 'A...something quiche', 'https://upload.wikimedia.org/wikipedia/commons/2/29/Quiche.jpg',
    [new Ingredient('Cheese', 3), new Ingredient('Spinach', 2), new Ingredient('Bacon', 1)]),
  new Recipe('Hamburger', 'A beef hamburger', 'https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg',
    [new Ingredient('Beef', 3), new Ingredient('Buns', 2), new Ingredient('Salt', 1)])];


  replaceRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }



  constructor() { }

  // addIngredientsToShoppingList(ingredients: Ingredient[]) {
  //   // this.shoppingListService.exportIngredientsFromRecipe(ingredients);
  //   this.store.dispatch(new ShoppingListActions.AddIngredientsToShoppingList(ingredients));
  // }



  //
  //
  // addRecipe(recipe: Recipe) {
  //   this.recipes.push(recipe);
  //   this.recipesChanged.next(this.recipes.slice());
  // }
  //
  // getRecipe(id: number) {
  //   return this.recipes.slice()[id];
  // }
  //
  // updateRecipe(index: number, recipe: Recipe) {
  //   this.recipes[index] = recipe;
  //   this.recipesChanged.next(this.recipes.slice());
  // }
  //
  // deleteRecipe(index: number) {
  //   this.recipes.splice(index, 1);
  //   this.recipesChanged.next(this.recipes.slice());
  // }
  //
  //



}
