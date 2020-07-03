import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Shoppinglist } from '../shoppinglist';

@Component({
  selector: 'app-shoppinglist-form',
  templateUrl: './shoppinglist-form.component.html',
  styleUrls: ['./shoppinglist-form.component.css']
})
export class ShoppinglistFormComponent implements OnInit {

  shoppinglist:Shoppinglist[];
  newShoppinglist = new Shoppinglist('', '', '', new Date());

  @Output() addShoppinglist = new EventEmitter<Shoppinglist>();
  submitShoppinglist() {
    this.addShoppinglist.emit(this.newShoppinglist);
  }


  constructor() { }

  ngOnInit() {
  }

}





