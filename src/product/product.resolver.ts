import { Args, Mutation, Resolver } from '@nestjs/graphql';
import {
  PurchaseProductInput,
  PurchaseProductOutput,
} from './dto/purchaseProduct.dto';
import {
  RegisterProductInput,
  RegisterProductOutput,
} from './dto/registerProduct.dto';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation((type) => RegisterProductOutput)
  async registerProduct(
    @Args('input') registerProductInput: RegisterProductInput,
  ): Promise<RegisterProductOutput> {
    return this.productService.registerProduct(registerProductInput);
  }

  @Mutation((type) => PurchaseProductOutput)
  async purchaseProduct(
    @Args('input') purchaseProductInput: PurchaseProductInput,
  ): Promise<PurchaseProductOutput> {
    return this.productService.purchaseProduct(purchaseProductInput);
  }
}
