import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from './recipe.service';
import { Recipe } from '../recipe/recipe.model';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-jay.firebaseio.com/data.json',
    this.recipeService.getRecipes());
  }

  fetchRecipes() {
    return this.http.get('https://ng-recipe-book-jay.firebaseio.com/data.json')
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
