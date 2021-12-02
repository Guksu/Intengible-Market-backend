import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/auth/auth.user-decorator';
import { User } from 'src/user/entitiy/user.entity';
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
  @UseGuards(GqlAuthGuard)
  async registerProduct(
    @GetUser() user: User,
    @Args('input') registerProductInput: RegisterProductInput,
  ): Promise<RegisterProductOutput> {
    return this.productService.registerProduct(user, registerProductInput);
  }

  @Mutation((type) => PurchaseProductOutput)
  @UseGuards(GqlAuthGuard)
  async purchaseProduct(
    @GetUser() user: User,
    @Args('input') purchaseProductInput: PurchaseProductInput,
  ): Promise<PurchaseProductOutput> {
    return this.productService.purchaseProduct(user, purchaseProductInput);
  }

  @Query((type) => SearchProductOutput)
  async searchProduct(
    @Args('input') searchProductInput: SearchProductInput,
  ): Promise<SearchProductOutput> {
    return this.productService.searchProduct(searchProductInput);
  }
}
