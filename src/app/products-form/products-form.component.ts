import { Component} from '@angular/core';
import { Product } from './../product.model';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { AddProduct } from '../redux/products.action';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent {
  private id = 2;
  productName = '';
  productModel = '';


  constructor(private store: Store<AppState>) { }

  onAdd() {
// tslint:disable-next-line: curly
    if (this.productName === '' || this.productModel === '' )  return;

    this.id = ++this.id;

    const product = new Product(
      this.productName,
      this.productModel,
      false,
      this.id
    );

    this.store.dispatch(new AddProduct(product));

    this.productName = '';
    this.productModel = '';

  }

  onLoad() {}

}
