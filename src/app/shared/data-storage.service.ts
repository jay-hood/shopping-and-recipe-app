import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from './recipe.service';
import { Recipe } from '../recipe/recipe.model';
import {AuthService} from '../auth/auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-jay.firebaseio.com/data.json',
    this.recipeService.getRecipes());
  }

  fetchRecipes() {
    const token = this.authService.getToken();

    this.http.get('https://ng-recipe-book-jay.firebaseio.com/data.json?auth=' + token)
    .map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    ).subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.replaceRecipes(recipes);
        }
      );
  }

}
