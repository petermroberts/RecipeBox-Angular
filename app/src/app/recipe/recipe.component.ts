import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipe!: Recipe
  subscription?: Subscription

  constructor(
    private data: DataService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.data.currentRecipe.subscribe(recipe => this.recipe = recipe)
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

  newRecipe() {
    this.data.changeRecipe(this.recipe)
  }

}
