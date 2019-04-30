import { Action } from '@ngrx/store';


import { Product } from '../admin/models/product.model';


export enum PRODUCT_ACTION {
    ADD_PRODUCT = 'ADD_PRODUCT',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
    UPDATE_PRODUCT = 'UPDATE_PRODUCT'
}

export class AddProduct implements Action {
    readonly type = PRODUCT_ACTION.ADD_PRODUCT;

    constructor(public payload: Product) { }
}
export class DeleteProduct implements Action {
    readonly type = PRODUCT_ACTION.DELETE_PRODUCT;

    constructor(public payload: Product) { }
}

export class EditProduct implements Action {
    readonly type = PRODUCT_ACTION.UPDATE_PRODUCT;

    constructor(public payload: Product) { }
}

export type ProductsAction = AddProduct | DeleteProduct | EditProduct;
