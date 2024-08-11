import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy{
  recipes: Recipe[] = [];
  subscription: Subscription

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription = this.recipeService.newCompleteRecipesArray.subscribe((value: Recipe[]) => {
      console.log(value);
      this.recipes = value;
    })
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe) {
  //  this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.activatedRoute});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
