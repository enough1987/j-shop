import { Component} from '@angular/core';
import { Product } from '../models/product.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { AddProduct } from '../store/products.action';

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

    if (this.productName === '' || this.productModel === '' ) {
       return;
    }

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


}
