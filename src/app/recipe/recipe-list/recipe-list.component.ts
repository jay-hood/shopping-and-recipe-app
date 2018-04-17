import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [new Recipe('A test recipe', 'description text', 'https://upload.wikimedia.org/wikipedia/commons/2/29/Quiche.jpg'),
    new Recipe('Another test recipe', 'description text', 'https://upload.wikimedia.org/wikipedia/commons/2/29/Quiche.jpg')];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
