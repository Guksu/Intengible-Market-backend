import { User } from 'src/user/entitiy/user.entity';
export declare class Product {
    productNo: number;
    name: string;
    img: string;
    description: string;
    price: number;
    volume: number;
    nowVolume: number;
    seller: User;
}
