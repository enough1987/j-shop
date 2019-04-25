import { Component, Input} from '@angular/core';
import { Product } from '../product.model';
import { AppState } from './../redux/app.state';
import { Store } from '@ngrx/store';
import { DeleteProduct, UpdateProduct } from './../redux/products.action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {

@Input() product: Product;
 constructor(private store: Store<AppState> ) {}

  onDelete() {
   this.store.dispatch(new DeleteProduct(this.product));
  }
  onBuy() {
    this.store.dispatch(new UpdateProduct(this.product));
  }
}
