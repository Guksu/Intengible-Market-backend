import { Product } from 'src/product/entitiy/product.entity';
import { PurchaseProduct } from 'src/product/entitiy/purchaseProduct.entity';
export declare class User {
    userNo: number;
    id: string;
    password: string;
    product: [Product];
    PurchaseProduct: [PurchaseProduct];
    hashPassword(): Promise<void>;
    checkPassword(checkPassword: string): Promise<boolean>;
}
