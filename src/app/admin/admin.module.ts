import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from '../shared/SharedModule';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductsService } from './services/products.service';
import { EffectsModule } from '@ngrx/effects';


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
    AdminRoutingModule,
    EffectsModule.forFeature([])
  ],
  exports: [
  ],
  providers: [ProductsService],
})
export class AdminModule { }
