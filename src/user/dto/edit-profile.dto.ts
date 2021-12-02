import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { CommonOutPut } from 'src/common/dto/output.dto';
import { User } from '../entitiy/user.entity';

@InputType()
export class EditProfileInput extends PartialType(
  PickType(User, ['id', 'password']),
) {}

@ObjectType()
export class EditProfileOutput extends CommonOutPut {}
