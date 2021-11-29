import { CreateAccountInput, CreateAccountOutput } from './dto/create-account.dto';
import { User } from './entitiy/user.entity';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    createAccount(createAccountInput: CreateAccountInput): Promise<CreateAccountOutput>;
    me(user: User): User;
}
