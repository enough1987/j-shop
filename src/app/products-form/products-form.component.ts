import { Component, OnInit} from '@angular/core';
import { Product } from '../models/product.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { AddProduct } from '../store/products.action';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  private id = 2;
  productName = '';
  productModel = '';

  form: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.form = new FormGroup({
      productName: new FormControl('', Validators.required),
      productModel: new FormControl('', Validators.required),
    });
  }


  onAdd() {

    console.log(this.form);

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
