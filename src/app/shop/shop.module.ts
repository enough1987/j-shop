import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnCustomMaterialModule } from '../shared/MyOwnCustomMaterialModule';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    MyOwnCustomMaterialModule
  ],
  exports: [
    ShopComponent
  ]
})
export class ShopModule { }
