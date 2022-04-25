export class Ingredient {

  public quantity: string = "";
  public unit: string = "";
  public ingredient: string = "";

  constructor(quantity: string, unit: string, ingredient: string){
    this.quantity = quantity;
    this.unit = unit;
    this.ingredient = ingredient;
  }
}

