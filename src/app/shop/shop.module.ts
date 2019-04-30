import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/SharedModule';
import { ShopComponent } from './shop/shop.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule
  ],
  exports: [
  ]
})
export class ShopModule { }
