import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredientBeingEdited = new Subject<number>();

  constructor() { }

  addIngredient(ingredient: Ingredient) {
    if ((ingredient?.name !== null && ingredient?.name !== undefined) && (ingredient?.amount !== null && ingredient?.amount !== undefined)) { // 
      this.ingredients.push(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  deleteIngredient(index) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredientByIndex(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index, ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
