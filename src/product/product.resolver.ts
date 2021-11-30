import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  PurchaseProductInput,
  PurchaseProductOutput,
} from './dto/purchaseProduct.dto';
import {
  RegisterProductInput,
  RegisterProductOutput,
} from './dto/registerProduct.dto';
import {
  SearchProductInput,
  SearchProductOutput,
} from './dto/searchProduct.dto';
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

  @Query((type) => SearchProductOutput)
  async searchProduct(
    @Args('input') searchProductInput: SearchProductInput,
  ): Promise<SearchProductOutput> {
    return this.productService.searchProduct(searchProductInput);
  }
}
