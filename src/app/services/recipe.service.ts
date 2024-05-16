import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Tasty Burger',
      'A healthy tasty double decker burger', 
      'https://th.bing.com/th/id/OIP.NN1F5amzhIDeJ6oRBVAKZAHaG3?rs=1&pid=ImgDetMain',
      [
        new Ingredient('Buns', 3),
        new Ingredient('Vegetables', 1),
        new Ingredient('Sauces', 1),
        new Ingredient('Veg Tikki', 2),
        new Ingredient('Cheeze Slice', 4),
      ]),
    new Recipe(
      'A Tasty Pizza',
      'This is a tasty pizza with extra topings and lots of loadings',
      'https://knowbbies.com/storage/courses/June2018/35118898_1675576969163519_65233698458435584_n-medium.jpg',
      [
        new Ingredient('Doe', 1),
        new Ingredient('Baby Corn', 5),
        new Ingredient('Paneer', 10),
        new Ingredient('Tomato', 1),
        new Ingredient('Onion', 1),
        new Ingredient('Cheeze', 5),
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }
  
}
