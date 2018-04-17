import { Component, OnInit, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();


  onAddIngredients(){
    //use const instead of let is because you are only declaring this variable
    //one time and will never alter its value. 
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);
    //This is also acceptable, but you don't need @ViewChild in that case
    //this.ingredientAdded.emit({name: name, amount: amount});
  }

  constructor() { }

  ngOnInit() {
  }



}
