import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';

import { AppState } from '../../store/app.state';
import { DeleteProduct, EditProduct } from '../../store/products.action';
import { Products, Product } from '../models/product.model';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable()
export class ProductsService {

   public products: Observable<Products> = this.store.select('ProductPage');

   constructor(private store: Store<AppState>,  public db: AngularFirestore) { }

   delete(product: Product) {
      this.store.dispatch(new DeleteProduct(product));
   }

   edit(product: Product) {
      this.store.dispatch(new EditProduct(product));
   }

   add(value: {name: string, model: string}) {
     const promise =  this.db.collection('products').add({
        name: value.name,
        model: value.model
      });

     return from(promise);
    }

}
