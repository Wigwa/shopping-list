import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shoppinglist } from '../shoppinglist';

@Component({
  selector: 'app-shoppinglist-detail',
  templateUrl: './shoppinglist-detail.component.html',
  styleUrls: ['./shoppinglist-detail.component.css']
})
export class ShoppinglistDetailComponent implements OnInit {

  @Input() shoppinglist: Shoppinglist;
  @Output() isDone  = new EventEmitter<boolean>();

  shoppinglistDan(purge: boolean){
    this.isDone.emit(purge);
  }
  constructor() { }

  ngOnInit() {
  }

}
