import { Action } from '@ngrx/store';
import { Product } from '../product.model';

// tslint:disable-next-line: no-namespace
export namespace PRODUCT_ACTION {
    export const ADD_PRODUCT = 'ADD_PRODUCT';
}

export class AddProduct implements Action {
    readonly type = PRODUCT_ACTION.ADD_PRODUCT;

    constructor(public payload: Product) {}
}
