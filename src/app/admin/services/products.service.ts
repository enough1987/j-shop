import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../store/app.state';
import { DeleteProduct, EditProduct } from '../../store/products.action';
import { Products, Product } from '../models/product.model';


@Injectable()
export class ProductsService {
   public products: Observable<Products> = this.store.select('ProductPage');

   constructor(private store: Store<AppState>) { }

   delete(product: Product) {
      this.store.dispatch(new DeleteProduct(product));
   }

   edit(product: Product) {
      this.store.dispatch(new EditProduct(product));
   }

}
