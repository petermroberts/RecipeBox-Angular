export interface Recipe {
  _id?: string,
  meal: string,
  title: string,
  yeild: string,
  prep_time: string,
  type: string,
  cuisine: string,
  diet: string[],
  ingredients: {
    quantity: string,
    unit: string,
    ingredient: string
  }[],
  directions: string[]
}
