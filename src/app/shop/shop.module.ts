import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnCustomMaterialModule } from '../shared/MyOwnCustomMaterialModule';
import { ShopComponent } from './shop/shop.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    MyOwnCustomMaterialModule,
    ShopRoutingModule
  ],
  exports: [
    ShopComponent
  ]
})
export class ShopModule { }
