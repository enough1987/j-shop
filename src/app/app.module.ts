import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyOwnCustomMaterialModule } from './shared/MyOwnCustomMaterialModule';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsFormComponent } from './products-form/products-form.component';

import { StoreModule } from '@ngrx/store';
import { ProductsReducer } from './redux/products.reducer';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsFormComponent,
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ProductPage: ProductsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
