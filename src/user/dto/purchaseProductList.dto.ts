import { Field, ObjectType } from '@nestjs/graphql';
import { CommonOutPut } from 'src/common/dto/output.dto';
import { PurchaseProduct } from 'src/product/entitiy/purchaseProduct.entity';

@ObjectType()
export class PurchaseProductListOutput extends CommonOutPut {
  @Field((type) => [PurchaseProduct], { nullable: true })
  purchaseProduct?: PurchaseProduct[];
}
