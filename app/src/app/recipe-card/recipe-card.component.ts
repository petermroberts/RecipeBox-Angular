import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe?: Recipe

  subscription?: Subscription

  constructor(
    private data: DataService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.data.currentRecipe.subscribe(recipe => this.recipe = recipe)
  }

  // ngOnDestroy() {
  //   this.subscription?.unsubscribe()
  // }

  // newRecipe() {
  //   this.data.changeRecipe(this.recipe)
  // }

}
