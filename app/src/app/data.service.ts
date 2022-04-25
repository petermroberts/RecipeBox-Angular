import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public editDataDetails: any = []

  public subject = new Subject<any>()

  private recipeSource = new BehaviorSubject(this.editDataDetails)

  currentRecipe = this.recipeSource.asObservable();

  changeRecipe(recipe: Recipe) {
    this.recipeSource.next(recipe)
  }
}
