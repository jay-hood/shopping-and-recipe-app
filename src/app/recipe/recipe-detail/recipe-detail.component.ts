import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';
import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducers';
import * as fromApp from '../../store/app.reducers';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(private store: Store<fromApp.AppState>, private recipeService: RecipeService,
    private router: Router, private activatedRoute: ActivatedRoute) {

  }

  exportToShoppingList() {
    this.store.dispatch(new ShoppingListActions.AddIngredientsToShoppingList(this.recipe.ingredients));
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onEditRecipe() {
    // Both of thes work fine. The second is more precise and specific and allows for multi-level navigation.
    // this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.activatedRoute});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    if (this.recipeService.recipes.length > 0) {
      this.recipe = this.recipeService.getRecipe(0);
    } else {
      this.router.navigate(['recipes']);
    }
  }

}
