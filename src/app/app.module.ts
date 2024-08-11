import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { DefaultRouteComponent } from './shared/default-route/default-route.component';
import { AppRoutingModule } from './app-routing.module';
import { GenericMessageComponent } from './shared/generic-message/generic-message.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { JsSimpleFormComponent } from './forms/js-simple-form/js-simple-form.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { FormAssignmentComponent } from './forms/form-assignment/form-assignment.component';
import { GmailSignup24Component } from './forms/gmail-signup24/gmail-signup24.component';
import { ShoppingListService } from './services/shopping-list.service';
import { RecipeService } from './services/recipe.service';
import { PipeComponent } from './pipes/pipe/pipe.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    DefaultRouteComponent,
    GenericMessageComponent,
    RecipeEditComponent,
    TemplateDrivenComponent,
    JsSimpleFormComponent,
    FormsComponent,
    ReactiveComponent,
    FormAssignmentComponent,
    GmailSignup24Component,
    PipeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
