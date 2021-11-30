import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/user/entitiy/user.entity';
import {
  RegisterProductInput,
  RegisterProductOutput,
} from './dto/registerProduct.dto';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation((type) => RegisterProductOutput)
  registerProduct(
    @Args('input') registerProductInput: RegisterProductInput,
  ): Promise<RegisterProductOutput> {
    return this.productService.registerProduct(registerProductInput);
  }
}
