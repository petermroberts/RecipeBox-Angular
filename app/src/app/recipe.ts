import { Ingredient } from "./ingredient"
export class Recipe {
  _id?: string = ""
  meal: string = ""
  title: string = ""
  yeild: string = ""
  prep_time: string = ""
  type: string = ""
  cuisine: string = ""
  diet: string[] = []
  ingredients: Ingredient[] = []
  directions: string[] = []

  constructor(
    _id: string,
    meal: string,
    title: string,
    yeild: string,
    prep_time: string,
    type: string,
    cuisine: string,
    diet: string[],
    ingredients: Ingredient[],
    directions: string[]){
      this._id = _id
      this.meal = meal
      this.title = title
      this.yeild = yeild
      this.prep_time = prep_time
      this.type = type
      this.cuisine = cuisine
      this.diet = diet
      this.ingredients = ingredients
      this.directions = directions
    }
}
