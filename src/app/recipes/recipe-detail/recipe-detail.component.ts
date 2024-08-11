import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe = {} as any;
  id: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.recipe = this.recipeService.getRecipeById(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.router.navigate(['/shopping-list']);
  }

  delete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }

}
