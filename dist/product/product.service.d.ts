import { User } from 'src/user/entitiy/user.entity';
import { Repository } from 'typeorm';
import { PurchaseProductInput, PurchaseProductOutput } from './dto/purchaseProduct.dto';
import { RegisterProductInput, RegisterProductOutput } from './dto/registerProduct.dto';
import { SearchProductInput, SearchProductOutput } from './dto/searchProduct.dto';
import { Product } from './entitiy/product.entity';
import { PurchaseProduct } from './entitiy/purchaseProduct.entity';
export declare class ProductService {
    private readonly product;
    private readonly purchase;
    constructor(product: Repository<Product>, purchase: Repository<PurchaseProduct>);
    registerProduct(user: User, registerProductInput: RegisterProductInput): Promise<RegisterProductOutput>;
    purchaseProduct(user: User, { name, volume }: PurchaseProductInput): Promise<PurchaseProductOutput>;
    searchProduct({ name, }: SearchProductInput): Promise<SearchProductOutput>;
}
