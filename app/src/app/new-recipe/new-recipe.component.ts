import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Ingredient } from '../ingredient';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

export interface Diet {
  name: string
  checked: boolean
}

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {

  diets: Diet[] = [
    {name: 'Vegetarian', checked: false},
    {name: 'Vegan', checked: false},
    {name: 'Dairy Free', checked: false},
    {name: 'Gluten Free', checked: false},
    {name: 'Kosher', checked: false},
    {name: 'Halal', checked: false}
  ]

  public newRecipe: Recipe = new Recipe("", "", "", "", "", "", "", [], [], [])

  public newIngredient: Ingredient = new Ingredient("", "", "")
  public newDirection: string = ""
  public ingredients: Ingredient[] = []
  public directions: string[] = []
  public addNewIngredient: boolean = true
  public addNewDirection: boolean = true

  constructor(
    private location: Location,
    private recipeService: RecipeService,
  ) {}

  ngOnInit(): void {
  }

  addIngredient(): void {
    this.ingredients.push(this.newIngredient)
    this.cancelNewIngredient()
  }

  showNewIngredientForm(): void {
    this.addNewIngredient = !this.addNewIngredient
  }

  cancelNewIngredient(): void {
    this.newIngredient = new Ingredient("", "", "")
    this.showNewIngredientForm()
  }

  addDirection(): void {
    this.directions.push(this.newDirection)
    this.cancelNewDirection()
  }

  showNewDirectionForm(): void {
    this.addNewDirection = !this.addNewDirection
  }

  cancelNewDirection(): void {
    this.newDirection = ""
    this.showNewDirectionForm()
  }

  createRecipe(): void {

    this.recipeService.addRecipe(this.newRecipe)
      .then( returnVal => {
        this.goBack()
      }).catch( err => {
        console.log("Axios err", err)
      })
  }

  goBack(): void {
    this.location.back();
  }

}
