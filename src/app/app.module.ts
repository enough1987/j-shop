import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from './shared/SharedModule';
import { AppRoutingModule } from './app-routing.module';
import { ShopModule } from './shop/shop.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { ProductsReducer } from './store/products.reducer';
import { metaReducers } from './store/app.state';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ProductsEffects } from './store/products.effects';



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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    EffectsModule.forRoot([ProductsEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
