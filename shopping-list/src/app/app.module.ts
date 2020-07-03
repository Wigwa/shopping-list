import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppinglistDetailComponent } from './shoppinglist-detail/shoppinglist-detail.component';
import { ShoppinglistFormComponent } from './shoppinglist-form/shoppinglist-form.component';
import { DateCountPipe } from './date-count.pipe';
import { StrikethroughDirective } from './strikethrough.directive';
import { ShoppingListComponent } from './shoppinglist/shoppinglist.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistDetailComponent,
    ShoppinglistFormComponent,
    DateCountPipe,
    StrikethroughDirective,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
