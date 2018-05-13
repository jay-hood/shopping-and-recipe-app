import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent implements OnInit {


  constructor(private dataStorage: DataStorageService ) {  }

  ngOnInit() {}

  onStoreRecipes() {
    this.dataStorage.storeRecipes().subscribe(
      (response: Response) => console.log(response),
      (error: Response) => console.log(error)
    );
  }

  onFetchRecipes() {
    this.dataStorage.fetchRecipes();
  }
}
