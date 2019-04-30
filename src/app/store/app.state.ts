import { Product } from '../admin/models/product.model';
import { ActionReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';


export interface AppState {
    ProductPage: {
        products: Product[];
    };
}

export function logger(reducer: ActionReducer<any>): any {
    return storeLogger({ collapsed: true })(reducer);
}

export const metaReducers = [logger];