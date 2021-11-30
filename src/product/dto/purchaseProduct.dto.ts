import { InputType, ObjectType, OmitType } from '@nestjs/graphql';
import { CommonOutPut } from 'src/common/dto/output.dto';
import { PurchaseProduct } from '../entitiy/purchaseProduct.entity';

@InputType()
export class PurchaseProductInput extends OmitType(PurchaseProduct, [
  'purchaseProductNo',
]) {}

@ObjectType()
export class PurchaseProductOutput extends CommonOutPut {}
