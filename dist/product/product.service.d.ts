import { Repository } from 'typeorm';
import { RegisterProductInput, RegisterProductOutput } from './dto/registerProduct.dto';
import { Product } from './entitiy/product.entity';
export declare class ProductService {
    private readonly product;
    constructor(product: Repository<Product>);
    registerProduct({ name, price, description, volume, seller, }: RegisterProductInput): Promise<RegisterProductOutput>;
}
