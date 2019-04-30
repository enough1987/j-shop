import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from '../shared/SharedModule';
import { ProductComponent } from './product/product/product.component';
import { ProductsComponent } from './product/products/products.component';
import { ProductsFormComponent } from './product/products-form/products-form.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductsService } from './services/products.service';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductsFormComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  exports: [
  ],
  providers: [ProductsService],
})
export class AdminModule { }
