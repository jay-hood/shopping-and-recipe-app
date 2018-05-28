import { Effect, Actions } from '@ngrx/effects';
import * as RecipeActions from './recipe.actions';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Recipe } from '../recipe.model';
import { withLatestFrom, switchMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRecipe from '../store/recipe.reducers';


@Injectable()
export class RecipeEffects {

  @Effect()
  recipeFetch = this.actions.ofType(RecipeActions.FETCH_RECIPES)
  .pipe(switchMap((action: RecipeActions.FetchRecipes) => {
    return this.httpClient.get<Recipe[]>('https://ng-recipe-book-jay.firebaseio.com/data.json', {
      observe: 'body',
      responseType: 'json'
    });
  }), map(
    (recipes) => {
      for (const recipe of recipes) {
        if (!recipe['ingredients']) {
          console.log(recipe);
          recipe['ingredients'] = [];
        }
      }
      return {
        type: RecipeActions.REPLACE_RECIPES,
        payload: recipes
      };
    }
  ));

@Effect({dispatch: false})
recipeStore = this.actions.ofType(RecipeActions.STORE_RECIPES)
.pipe(withLatestFrom()
, switchMap(([action, state]) => {
  const request = new HttpRequest('PUT', 'https://ng-recipe-book-jay.firebaseio.com/data.json',
  state.recipes, {reportProgress: true});
  return this.httpClient.request(request);
}));

  constructor(
    private actions: Actions,
    private httpClient: HttpClient,
    private store: Store<fromRecipe.FeatureState>
  ) {

  }
}
