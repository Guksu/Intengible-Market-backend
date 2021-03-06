import { InputType, ObjectType } from '@nestjs/graphql';
import { CommonInput } from 'src/common/dto/input.dto';
import { CommonOutPut } from 'src/common/dto/output.dto';

@InputType()
export class CreateAccountInput extends CommonInput {}

@ObjectType()
export class CreateAccountOutput extends CommonOutPut {}
