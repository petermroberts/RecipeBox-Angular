import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-menu',
  templateUrl: './recipe-menu.component.html',
  styleUrls: ['./recipe-menu.component.scss']
})
export class RecipeMenuComponent implements OnInit {

  recipes: Recipe[] = []

  constructor(
    private recipeService: RecipeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .then(returnVal => {
        this.recipes = returnVal
      }).catch( err => {
        console.log("Axios err", err)
      })
  }

  deleteRecipe(recipe: Recipe): void {

    this.recipeService.deleteRecipe(recipe)
      .then( returnVal => {
        this.recipes.forEach((value, index) => {
          if(value['_id'] == recipe['_id']) this.recipes.splice(index,1);
        })
      }).catch( err => {
        console.log("Axios err: ", err);
      })
  }

}
