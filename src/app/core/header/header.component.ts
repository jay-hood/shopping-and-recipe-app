import { Component, OnInit } from '@angular/core';
import * as AuthActions from '../../auth/store/auth.actions';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import { Observable } from 'rxjs';
import * as RecipeActions from '../../recipe/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  authState: Observable<fromAuth.State>;

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  constructor(
    private store: Store<fromApp.AppState>) {  }

  onStoreRecipes() {
    this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onFetchRecipes() {
    // this.dataStorage.fetchRecipes();
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout() {
    // this.authService.logout();
    this.store.dispatch(new AuthActions.Logout());
  }
}
