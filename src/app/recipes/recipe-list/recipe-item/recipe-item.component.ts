import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe = {} as any;
  @Output() recipeSelected = new EventEmitter<void>();
  @Input() indexOfRecipe: number = 0;

  constructor() { }

  ngOnInit() {
    console.log(this.indexOfRecipe);
  }

}
