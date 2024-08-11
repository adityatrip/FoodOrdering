import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
  
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  // @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @ViewChild('formRef', {static: false}) formReference: NgForm;
  editSubscription: Subscription;
  editMode: boolean = false;
  itemIndexEdited: number;
  itemEdited: any;

  constructor(private slService : ShoppingListService) {
      // this.nameInputRef = '' as any;
      // this.amountInputRef = '' as any;
  }

  ngOnInit() {
    this.editSubscription = this.slService.ingredientBeingEdited.subscribe((index: number)=> {
      this.itemIndexEdited = index;
      this.editMode = true;
      this.itemEdited = this.slService.getIngredientByIndex(index);
      this.formReference.setValue({
        name: this.itemEdited.name,
        amount: this.itemEdited.amount
      });
    });
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }

  onAddItem(formRef: NgForm) {
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    console.log(formRef, formRef.value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.itemIndexEdited, formRef.value);
      this.onClear();
    } else {
      const newIngredient = new Ingredient(formRef.value.name.length >= 1 ? formRef.value.name : null, formRef.value.amount > 0 ? formRef.value.amount : null);
      this.slService.addIngredient(newIngredient);
    }
  }

  onClear() {
    this.formReference.resetForm();
    this.editMode = false;
  }

  onDelete() {
    this.onClear();
    this.slService.deleteIngredient(this.itemIndexEdited);
  }

}
  