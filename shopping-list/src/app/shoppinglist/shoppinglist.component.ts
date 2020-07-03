import { Component, OnInit } from '@angular/core';
import { Shoppinglist } from '../shoppinglist'

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppingListComponent implements OnInit {
  ngOnInit() {
    
  }
  shoppinglist: Shoppinglist[] = [
    new Shoppinglist('Fruits(Apple,Mango)', '1Okg', 'Ksh.1500', new Date(2020, 7, 2)),

    new Shoppinglist('Maize Flour(Pembe)', '2Bundles', 'Ksh.2200', new Date(2020, 7, 2)),

    new Shoppinglist('Vegetables(SukumaWiki,Tomatoes,Onions)', '2Kg each', 'Ksh.500', new Date(2020, 7, 2)),

    new Shoppinglist('Sugar(Naivas Sugar)', '10Kg', 'Ksh.1000', new Date(2020, 7.2)),
    new Shoppinglist('Wheat Flour(Pembe)', '1Bundle', 'Ksh.1200', new Date(2020, 7, 2)),
  ];

seeDetails(index) {
  this.shoppinglist[index].viewDetails = !this.shoppinglist[index].viewDetails;
}
  purgeShoppingList(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this Item`);
      if (toDelete) {
        this.shoppinglist.splice(index, 1);
      }
    }
  }
addNewShoppinglist(luc) {
  luc.elapse = new Date(luc.elapse)
  this.shoppinglist.push(luc);

}


}

