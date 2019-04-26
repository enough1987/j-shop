import { Product } from '../models/product.model';


export interface AppState {
    ProductPage: {
        products: Product[];
    };
}
