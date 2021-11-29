import { CreateAccountInput, CreateAccountOutput } from './dto/create-account.dto';
import { EditProfileInput, EditProfileOutput } from './dto/edit-profile.dto';
import { LoginInput, LoginOutPut } from './dto/login.dto';
import { UserProfileInput, UserProfileOutput } from './dto/userProfile.dto';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    createAccount(createAccountInput: CreateAccountInput): Promise<CreateAccountOutput>;
    login(loginInput: LoginInput): Promise<LoginOutPut>;
    userProfile(userProfileInput: UserProfileInput): Promise<UserProfileOutput>;
    editProfile(editProfileInput: EditProfileInput): Promise<EditProfileOutput>;
}
