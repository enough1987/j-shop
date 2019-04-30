import { Product } from '../admin/models/product.model';


export interface AppState {
    ProductPage: {
        products: Product[];
    };
}
