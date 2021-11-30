import { Repository } from 'typeorm';
import { PurchaseProductInput, PurchaseProductOutput } from './dto/purchaseProduct.dto';
import { RegisterProductInput, RegisterProductOutput } from './dto/registerProduct.dto';
import { Product } from './entitiy/product.entity';
import { PurchaseProduct } from './entitiy/purchaseProduct.entity';
export declare class ProductService {
    private readonly product;
    private readonly purchase;
    constructor(product: Repository<Product>, purchase: Repository<PurchaseProduct>);
    registerProduct({ name, price, description, volume, seller, }: RegisterProductInput): Promise<RegisterProductOutput>;
    purchaseProduct({ name, volume, buyer, }: PurchaseProductInput): Promise<PurchaseProductOutput>;
}
