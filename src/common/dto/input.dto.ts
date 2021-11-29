import { InputType, PickType } from '@nestjs/graphql';
import { User } from 'src/user/entitiy/user.entity';

@InputType()
export class CommonInput extends PickType(User, ['id', 'password']) {}
