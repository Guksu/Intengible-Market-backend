import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutPut } from 'src/common/dto/output.dto';
import { Product } from '../entitiy/product.entity';

@InputType()
export class SearchProductInput extends PickType(Product, ['name']) {}

@ObjectType()
export class SearchProductOutput extends CommonOutPut {
  @Field((type) => [Product], { nullable: true })
  product?: Product[];
}
