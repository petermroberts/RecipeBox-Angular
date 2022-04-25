import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  //All the CRUD methods for back end go in here

  private port = 8080;
  private recipesUrl = 'api/recipes';

  async getRecipes() {
    return axios.get(`http://localhost:${this.port}/${this.recipesUrl}`)
      .then((response) => {
        return response.data;
      })
  }

  async addRecipe(newRecipe: Recipe) {
    delete newRecipe['_id'];

    return axios.post(`http://localhost:${this.port}/${this.recipesUrl}`, newRecipe)
      .then((response) => {
        return response.data;
      })
  }

  async updateRecipe(recipe: Recipe) {

    let recipeData = { recipe: recipe };

    return axios.put(`http://localhost:${this.port}/${this.recipesUrl}`, recipeData)
      .then((response) => {
        return response.data;
      })
  }

  async deleteRecipe(recipe: Recipe) {
    const response = await axios.delete(`http://localhost:${this.port}/${this.recipesUrl}/${recipe['_id']}`);
    return response.data;
  }

  constructor() { }
}
