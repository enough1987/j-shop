import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { MyOwnCustomMaterialModule } from '../shared/MyOwnCustomMaterialModule';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    MyOwnCustomMaterialModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
