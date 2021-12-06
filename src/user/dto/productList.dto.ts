import { Field, ObjectType } from '@nestjs/graphql';
import { CommonOutPut } from 'src/common/dto/output.dto';
import { Product } from 'src/product/entitiy/product.entity';

@ObjectType()
export class ProductListOutput extends CommonOutPut {
  @Field((type) => [Product], { nullable: true })
  product?: Product[];
}
