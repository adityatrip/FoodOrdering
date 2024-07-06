import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DefaultRouteComponent } from './shared/default-route/default-route.component';
import { GenericMessageComponent } from './shared/generic-message/generic-message.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { FormsComponent } from './forms/forms.component';
import { JsSimpleFormComponent } from './forms/js-simple-form/js-simple-form.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { FormAssignmentComponent } from './forms/form-assignment/form-assignment.component';
import { GmailSignup24Component } from './forms/gmail-signup24/gmail-signup24.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: GenericMessageComponent,
      },
      {
        path: 'new',
        component: RecipeEditComponent,
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent
      }
    ]
  },
  { path: "shopping-list", component: ShoppingListComponent },
  { path: "form", component: FormsComponent,
    children: [
      { path: 'js', component: JsSimpleFormComponent},
      { path: 'td', component: TemplateDrivenComponent},
      { path: 'reactive', component: ReactiveComponent},
      { path: 'formAssignment', component: FormAssignmentComponent},
      { path: 'gmail', component: GmailSignup24Component},
      { path: "**", component: DefaultRouteComponent}
    ]
  },
  { path: "**", component: DefaultRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
