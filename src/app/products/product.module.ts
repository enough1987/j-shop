import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { MyOwnCustomMaterialModule } from '../shared/MyOwnCustomMaterialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';

import { storeLogger } from 'ngrx-store-logger';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsReducer } from '../store/products.reducer';


export function logger(reducer: ActionReducer<any>): any {
  // default, no options
  return storeLogger({collapsed: true})(reducer);
}
export const metaReducers = [logger];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductsFormComponent
  ],
  imports: [
    CommonModule,
    MyOwnCustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ProductPage: ProductsReducer}, {metaReducers})
  ],
  exports: [
    ProductsComponent,
  ]
})
export class ProductModule { }
