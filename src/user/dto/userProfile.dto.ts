import { ObjectType, PartialType, PickType } from '@nestjs/graphql';
import { CommonOutPut } from 'src/common/dto/output.dto';
import { User } from '../entitiy/user.entity';

@ObjectType()
export class UserProfileOutput extends CommonOutPut {}
