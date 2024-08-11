import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  index: any;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.index = +param['id'];
      console.log('Selected recipe with id: ', +param['id']);
      this.editMode = param['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let imageUrl = '';
    let description = '';
    let ingredients = new FormArray([]);

    if (this.editMode) {
      let editedRecipe = this.recipeService.getRecipeById(this.index);
      recipeName = editedRecipe.name;
      imageUrl = editedRecipe.imagePath;
      description = editedRecipe.description;
      if (editedRecipe['ingredients']) {
        for(let ingredient of editedRecipe['ingredients']) {
          ingredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]) // pattern for positive number only
          }))
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imageUrl': new FormControl(imageUrl, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': ingredients
    });
  }

  /**
   * This is a getter for getting controls as for latest version of Angular, the code does not work.
   */
  get ingredientsControls() : any[]{
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onSave() {
    let updatedRecipe = new Recipe(
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.imageUrl,
      this.recipeForm.value.ingredients);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.index, updatedRecipe);
    } else {
      this.recipeService.addRecipe(updatedRecipe);
    }
    this.onCancel();
    // this.router.navigate(['/recipes']);
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  onDeleteIngredient(index) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
