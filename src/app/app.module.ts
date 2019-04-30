import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyOwnCustomMaterialModule } from './shared/MyOwnCustomMaterialModule';
import { AppRoutingModule } from './app-routing.module';
import { ShopModule } from './shop/shop.module';


import { AppComponent } from './app.component';
// Service
import { ProductsService } from './admin/services/products.service';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
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
    AdminModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
