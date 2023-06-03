import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
   recipes: Recipe[] = [
    new Recipe( "Spaghetti", "A classic Italian American recipe", "https://www.simplyrecipes.com/thmb/Boo37yZBqeSpmELBIP_BBX_yVlU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Spaghetti-And-Meatballs-LEAD-3-40bdae68ea144751a8e0a4b0f972af2d.jpg"),
    new Recipe( "BBQ Pull Pork", "A Southen Classic", "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2Farchive%2F5f846e99af1d5a7abfe11f2c50ba71d763642073")
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(){}

  ngOnInit(){}

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
