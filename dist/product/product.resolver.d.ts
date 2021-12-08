import { User } from 'src/user/entitiy/user.entity';
import { PurchaseProductInput, PurchaseProductOutput } from './dto/purchaseProduct.dto';
import { RegisterProductInput, RegisterProductOutput } from './dto/registerProduct.dto';
import { GetProductOutput } from './dto/getProduct.dto';
import { ProductService } from './product.service';
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    registerProduct(user: User, registerProductInput: RegisterProductInput): Promise<RegisterProductOutput>;
    purchaseProduct(user: User, purchaseProductInput: PurchaseProductInput): Promise<PurchaseProductOutput>;
    getProduct(): Promise<GetProductOutput>;
}
