import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';


import { SharedModule } from './shared/SharedModule';
import { AppRoutingModule } from './app-routing.module';
import { ShopModule } from './shop/shop.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { ProductsReducer } from './store/products.reducer';
import { metaReducers } from './store/app.state';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ ProductPage: ProductsReducer }, { metaReducers }),
    AppRoutingModule,
    SharedModule,
    ShopModule,
    AdminModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
