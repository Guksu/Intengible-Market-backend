import { CreateAccountInput, CreateAccountOutput } from './dto/create-account.dto';
import { DeleteUserInput, DeleteUserOutput } from './dto/delete-user.dto';
import { EditProfileInput, EditProfileOutput } from './dto/edit-profile.dto';
import { LoginInput, LoginOutPut } from './dto/login.dto';
import { ProductListOutput } from './dto/productList';
import { User } from './entitiy/user.entity';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    createAccount(createAccountInput: CreateAccountInput): Promise<CreateAccountOutput>;
    login(loginInput: LoginInput): Promise<LoginOutPut>;
    userProductList(user: User): Promise<ProductListOutput>;
    editProfile(user: User, editProfileInput: EditProfileInput): Promise<EditProfileOutput>;
    deleteUser(user: User, delteUserInput: DeleteUserInput): Promise<DeleteUserOutput>;
}
