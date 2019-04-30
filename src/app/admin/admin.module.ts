import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnCustomMaterialModule } from '../shared/MyOwnCustomMaterialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product/product.component';

import { storeLogger } from 'ngrx-store-logger';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { ProductsReducer } from '../store/products.reducer';
import { ProductsComponent } from './product/products/products.component';
import { ProductsFormComponent } from './product/products-form/products-form.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductsService } from './services/products.service';


export function logger(reducer: ActionReducer<any>): any {
  // default, no options
  return storeLogger({collapsed: true})(reducer);
}
export const metaReducers = [logger];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductsFormComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    MyOwnCustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    StoreModule.forRoot({ProductPage: ProductsReducer}, {metaReducers})
  ],
  exports: [
    AdminComponent,
  ],
  providers: [ProductsService],
})
export class AdminModule { }
