import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import {RecipeService} from './recipe.service';
import { Recipe } from '../recipe/recipe.model';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    // const token = this.authService.getToken();

    // return this.httpClient.put('https://ng-recipe-book-jay.firebaseio.com/data.json',
    // this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    // });
    const request = new HttpRequest('PUT', 'https://ng-recipe-book-jay.firebaseio.com/data.json',
    this.recipeService.getRecipes(), {reportProgress: true});
    return this.httpClient.request(request);
  }

  fetchRecipes() {
    // const token = this.authService.getToken();

  }

}
