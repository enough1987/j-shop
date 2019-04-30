
import { Product } from '../admin/models/product.model';
import { PRODUCT_ACTION, ProductsAction } from './products.action';

const initialState = {
    products: [
        new Product ('iPhone', '10X', false, 1),
        new Product ('Samsung', 'Galaxy', false, 2)
    ]
};

export function ProductsReducer(state = initialState, action: ProductsAction) {



    switch (action.type) {
        case PRODUCT_ACTION.ADD_PRODUCT:
           return {
               ...state,
               products: [...state.products, new Product(action.payload.name, action.payload.model, false, Math.random())]
           };
        case PRODUCT_ACTION.DELETE_PRODUCT:
            return {
                ...state,
                products: [...state.products.filter(prod => prod.id !== action.payload.id)]
            };
        case PRODUCT_ACTION.UPDATE_PRODUCT:
            const idx = state.products.findIndex( prod => prod.id === action.payload.id);
            state.products[idx].isSold = true;
            return {
                ...state,
                products: [...state.products]
            };

        default:
           return state;
    }
}
