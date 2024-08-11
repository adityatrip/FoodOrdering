import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private ingredientSubscription : any;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.ingredientSubscription = this.slService.ingredientsChanged.subscribe((ingredient: Ingredient[]) => {
      this.ingredients = ingredient;
    });
  }

  ngOnDestroy(): void {
    this.ingredientSubscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.slService.ingredientBeingEdited.next(index);
  }
}
