import { Component, OnInit } from '@angular/core';
import {  Product } from './product.model';
import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

public products: Product[] = [];

constructor(private store: Store<AppState>) {}

ngOnInit() {
  this.store.select('ProductPage').subscribe(d => {
  console.log(d);
  });
}

onAdd(product: Product) {
  this.products.push(product);
}
onDelete(product: Product) {
 this.products =  this.products.filter(prod => prod.id !== product.id);
}

}
