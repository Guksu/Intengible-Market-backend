import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutPut } from 'src/common/dto/output.dto';

@InputType()
export class EditProfileInput {
  @Field((type) => String)
  newPassword: string;
}

@ObjectType()
export class EditProfileOutput extends CommonOutPut {}
