import { PurchaseProductInput, PurchaseProductOutput } from './dto/purchaseProduct.dto';
import { RegisterProductInput, RegisterProductOutput } from './dto/registerProduct.dto';
import { ProductService } from './product.service';
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    registerProduct(registerProductInput: RegisterProductInput): Promise<RegisterProductOutput>;
    purchaseProduct(purchaseProductInput: PurchaseProductInput): Promise<PurchaseProductOutput>;
}