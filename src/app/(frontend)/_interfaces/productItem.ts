export interface ProductItem {
    id: string | number;
    productTitle: string;
    productImage: ProductImage
}

export interface ProductImage {
    id: number;
    filename: string
}