import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { User } from '../entitiy/user.entity';

@InputType()
export class CreateAccountInput extends PickType(User, ['id', 'password']) {}

@ObjectType()
export class CreateAccountOutput {
  @Field((type) => String, { nullable: true })
  error?: string;

  @Field((type) => Boolean)
  ok: boolean;
}
