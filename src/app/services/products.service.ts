import { Injectable } from '@angular/core';
import { DeleteProduct, EditProduct } from '../store/products.action';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Product, Products } from '../models/product.model';
import { Observable } from 'rxjs';


@Injectable()
export class ProductsService {
   public products: Observable<Products> = this.store.select('ProductPage');

    constructor(private store: Store<AppState> ) {}

    delete(product: Product) {
      this.store.dispatch(new DeleteProduct(product));
   }

    edit(product: Product) {
       this.store.dispatch(new EditProduct(product));
    }



}

