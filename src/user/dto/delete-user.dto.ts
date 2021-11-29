import { InputType, ObjectType } from '@nestjs/graphql';
import { CommonInput } from 'src/common/dto/input.dto';
import { CommonOutPut } from 'src/common/dto/output.dto';

@InputType()
export class DeleteUserInput extends CommonInput {}

@ObjectType()
export class DeleteUserOutput extends CommonOutPut {}
