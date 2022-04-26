import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe?: Recipe

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToRecipe(): void {
    this.router.navigateByUrl('/recipe/{{recipe.title}}', {state: {recipe: this.recipe}})
  }

}
