import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from './../product.model';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  private id = 2;
  productName = '';
  productModel = '';

  @Output() AddProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }
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


    this.AddProduct.emit(product)

    this.productName = '';
    this.productModel = '';

  }

  onLoad() {}

}
