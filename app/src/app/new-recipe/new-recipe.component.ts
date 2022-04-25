import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {

  ingredients: Ingredient[] = []
  addNewIngredient: boolean = true
  public newIngredient: Ingredient = new Ingredient("", "", "")

  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  addIngredient(): void {
    this.ingredients.push(this.newIngredient)
    this.addNewIngredient = false
  }

  goBack(): void {
    this.location.back();
  }

}
