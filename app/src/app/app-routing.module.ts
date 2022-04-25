import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeMenuComponent } from './recipe-menu/recipe-menu.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
