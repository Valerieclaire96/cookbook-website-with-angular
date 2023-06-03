import { Component, OnInit, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
   @Output()  ingredients: Ingredient[] = [
    new Ingredient("pasta", 1),
    new Ingredient("tomatos", 10)
  ]


  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
