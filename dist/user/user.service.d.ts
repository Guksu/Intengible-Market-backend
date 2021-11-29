import { Repository } from 'typeorm';
import { CreateAccountInput, CreateAccountOutput } from './dto/create-account.dto';
import { LoginInput, LoginOutPut } from './dto/login.dto';
import { User } from './entitiy/user.entity';
export declare class UserService {
    private readonly user;
    constructor(user: Repository<User>);
    craateAccount({ id, password, }: CreateAccountInput): Promise<CreateAccountOutput>;
    login({ id, password }: LoginInput): Promise<LoginOutPut>;
}
