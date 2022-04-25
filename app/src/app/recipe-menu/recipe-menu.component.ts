import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipe-menu',
  templateUrl: './recipe-menu.component.html',
  styleUrls: ['./recipe-menu.component.scss']
})
export class RecipeMenuComponent implements OnInit {

  recipes: Recipe[] = []

  constructor(
    private recipeService: RecipeService,
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

}
