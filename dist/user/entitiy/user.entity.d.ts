import { Product } from 'src/product/entitiy/product.entity';
export declare class User {
    userNo: number;
    id: string;
    password: string;
    product: Product[];
    hashPassword(): Promise<void>;
    checkPassword(checkPassword: string): Promise<boolean>;
}
