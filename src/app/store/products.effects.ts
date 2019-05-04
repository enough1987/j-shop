import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY,  of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PRODUCT_ACTION } from './products.action';
import { ProductsService } from '../admin/services/products.service';


@Injectable()
export class ProductsEffects {



  @Effect()
  addProduct$ = this.actions$
    .pipe(
      ofType(PRODUCT_ACTION.ADD_PRODUCT),
      mergeMap(() => this.productServise.add({name: 'test' , model: 'test'})
      .pipe(
        map(movies => ({ type: PRODUCT_ACTION.ADD_PRODUCT_SUCCES, payload: movies })),
        catchError(() => EMPTY)
      ))
    );

  constructor(
    private actions$: Actions, private productServise: ProductsService) {}


}
