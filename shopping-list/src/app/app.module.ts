import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Shoppinglist } from './shoppinglist.details/shoppinglist.details.component';
import { ShoppinglistDetailComponent } from './shoppinglist-detail/shoppinglist-detail.component';
import { ShoppinglistFormComponent } from './shoppinglist-form/shoppinglist-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    Shoppinglist.DetailsComponent,
    ShoppinglistDetailComponent,
    ShoppinglistFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
