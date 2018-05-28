import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Recipe} from '../recipe.model';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';
import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducers';
import * as fromApp from '../../store/app.reducers';
import * as fromRecipes from '../store/recipe.reducers';
import * as RecipeActions from '../store/recipe.actions';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeState: Observable<fromRecipes.State>;
  id: number;

  constructor(
    private store: Store<fromRecipes.FeatureState>,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  exportToShoppingList() {
    this.store.select('recipes').pipe(take(1)).subscribe(
      (recipeState: fromRecipes.State) => {
        this.store.dispatch(new ShoppingListActions
          .AddIngredientsToShoppingList(recipeState.recipes[this.id].ingredients));
      });

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeState = this.store.select('recipes');
      }
    );
  }

  onEditRecipe() {
    // Both of thes work fine. The second is more precise and specific and allows for multi-level navigation.
    // this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.activatedRoute});
  }

  onDeleteRecipe() {
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['recipes']);
    // this.recipeService.deleteRecipe(this.id);
    // if (this.recipeService.recipes.length > 0) {
    //   this.recipe = this.recipeService.getRecipe(0);
    // } else {
    //   this.router.navigate(['recipes']);
    // }
  }

}
