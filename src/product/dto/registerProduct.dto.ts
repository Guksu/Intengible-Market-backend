import { InputType, ObjectType, OmitType } from '@nestjs/graphql';
import { CommonOutPut } from 'src/common/dto/output.dto';
import { Product } from '../entitiy/product.entity';

@InputType()
export class RegisterProductInput extends OmitType(Product, [
  'productNo',
  'nowVolume',
  'seller',
]) {}

@ObjectType()
export class RegisterProductOutput extends CommonOutPut {}
