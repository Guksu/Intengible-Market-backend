import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CommonOutPut } from 'src/common/dto/output.dto';
import { User } from '../entitiy/user.entity';

@InputType()
export class UserProfileInput {
  @Field((type) => Number)
  userNo: number;
}

@ObjectType()
export class UserProfileOutput extends CommonOutPut {
  @Field((type) => User, { nullable: true })
  user?: User;
}
