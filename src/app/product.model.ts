export class Product {
    constructor(
        public name: string,
        public model: string,
        public isSold: boolean = false,
        public id?: number,
    ) {}
}

export interface Products {
    products: Product[];
}
