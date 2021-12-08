import { Field, ObjectType } from '@nestjs/graphql';
import { CommonOutPut } from 'src/common/dto/output.dto';
import { Product } from '../entitiy/product.entity';

@ObjectType()
export class GetProductOutput extends CommonOutPut {
  @Field((type) => [Product], { nullable: true })
  product?: Product[];
}
