
import { Product } from '../product.model';
import { PRODUCT_ACTION, AddProduct } from './products.action';

const initialState = {
    products: [
        new Product ('iPhone', '10X', false, 1),
        new Product ('Samsung', 'Galaxy', false, 2)
    ]
};

export function ProductsReducer(state = initialState, action: AddProduct) {

    switch (action.type) {
        case PRODUCT_ACTION.ADD_PRODUCT:
           return {
               ...state,
               products: [...state.products, action.payload]
           }
        default:
           return state;
    }
 
}