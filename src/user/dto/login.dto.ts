import { InputType, ObjectType } from '@nestjs/graphql';
import { CommonInput } from 'src/common/dto/input.dto';
import { CommonOutPut } from 'src/common/dto/output.dto';

@InputType()
export class LoginInput extends CommonInput {}

@ObjectType()
export class LoginOutPut extends CommonOutPut {}
