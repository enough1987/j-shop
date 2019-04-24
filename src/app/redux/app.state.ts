import { Product } from '../product.model';

export interface AppState {
    ProductPage: {
        products: Product[];
    };
}
