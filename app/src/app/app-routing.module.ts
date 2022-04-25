import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeMenuComponent } from './recipe-menu/recipe-menu.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'new-recipe', component: NewRecipeComponent},
  {path: 'dashboard', component: RecipeMenuComponent},
  {path: 'recipe/:title', component: RecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
