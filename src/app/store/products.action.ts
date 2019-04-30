import { Action } from '@ngrx/store';
import { Product } from '../admin/models/product.model';


// tslint:disable-next-line: no-namespace
export namespace PRODUCT_ACTION {
    export const ADD_PRODUCT = 'ADD_PRODUCT';
    export const DELETE_PRODUCT = 'DELETE_PRODUCT';
    export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
}

export class AddProduct implements Action {
    readonly type = PRODUCT_ACTION.ADD_PRODUCT;

    constructor(public payload: Product) {}
}
export class DeleteProduct implements Action {
    readonly type = PRODUCT_ACTION.DELETE_PRODUCT;

    constructor(public payload: Product) {}
}

export class EditProduct implements Action {
    readonly type = PRODUCT_ACTION.UPDATE_PRODUCT;

    constructor(public payload: Product) {}
}

export type ProductsAction = AddProduct | DeleteProduct | EditProduct;
