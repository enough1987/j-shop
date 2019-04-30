import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyOwnCustomMaterialModule } from './shared/MyOwnCustomMaterialModule';
import { AppRoutingModule } from './app-routing.module';
import { ShopModule } from './shop/shop.module';
import { ProductModule } from './products/product.module';

import { AppComponent } from './app.component';
// Service
import { ProductsService } from './services/products.service';
import { NavigateComponent } from './navigate/navigate.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShopModule,
    ProductModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
