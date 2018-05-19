import { Component } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {


  constructor(private dataStorage: DataStorageService, public authService: AuthService ) {  }

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
