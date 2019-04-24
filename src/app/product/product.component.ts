import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {

@Input() product: Product;
@Output() deleteProduct = new EventEmitter<Product>();

  onDelete() {
    this.deleteProduct.emit(this.product);
  }
  onBuy() {
    this.product.isSold = true;
  }
}
