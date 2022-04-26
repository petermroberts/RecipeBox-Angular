import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  // @ViewChild(RecipeCardComponent) recipeCard!: { recipe: Recipe | undefined; };


  recipe?: Recipe

  constructor() { }

  ngOnInit(): void {
    this.recipe = history.state
    console.log(this.recipe?._id)
    // this.recipe = this.recipeCard.recipe
  }


}
