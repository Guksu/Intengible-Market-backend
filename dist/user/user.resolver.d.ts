import { CreateAccountInput, CreateAccountOutput } from './dto/create-account.dto';
import { DeleteUserInput, DeleteUserOutput } from './dto/delete-user.dto';
import { EditProfileInput, EditProfileOutput } from './dto/edit-profile.dto';
import { LoginInput, LoginOutPut } from './dto/login.dto';
import { UserProfileOutput } from './dto/userProfile.dto';
import { User } from './entitiy/user.entity';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    createAccount(createAccountInput: CreateAccountInput): Promise<CreateAccountOutput>;
    login(loginInput: LoginInput): Promise<LoginOutPut>;
    userProfile(user: User): Promise<UserProfileOutput>;
    editProfile(user: User, editProfileInput: EditProfileInput): Promise<EditProfileOutput>;
    deleteUser(user: User, delteUserInput: DeleteUserInput): Promise<DeleteUserOutput>;
}
