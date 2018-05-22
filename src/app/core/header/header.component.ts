import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  authState: Observable<fromAuth.State>;

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  constructor(private dataStorage: DataStorageService, public authService: AuthService,
    private store: Store<fromApp.AppState>) {  }

  onStoreRecipes() {
    this.dataStorage.storeRecipes().subscribe(
      (response: HttpEvent<Object>) => {
        console.log(response);
      }
    );
  }

  onFetchRecipes() {
    this.dataStorage.fetchRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
