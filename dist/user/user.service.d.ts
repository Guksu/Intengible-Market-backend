import { Repository } from 'typeorm';
import { CreateAccountInput, CreateAccountOutput } from './dto/create-account.dto';
import { DeleteUserInput, DeleteUserOutput } from './dto/delete-user.dto';
import { EditProfileInput, EditProfileOutput } from './dto/edit-profile.dto';
import { LoginInput, LoginOutPut } from './dto/login.dto';
import { UserProfileInput, UserProfileOutput } from './dto/userProfile.dto';
import { User } from './entitiy/user.entity';
export declare class UserService {
    private readonly user;
    constructor(user: Repository<User>);
    craateAccount({ id, password, }: CreateAccountInput): Promise<CreateAccountOutput>;
    login({ id, password }: LoginInput): Promise<LoginOutPut>;
    userProfile({ userNo }: UserProfileInput): Promise<UserProfileOutput>;
    editProfile({ password, userNo, }: EditProfileInput): Promise<EditProfileOutput>;
    deleteUser({ id, password, }: DeleteUserInput): Promise<DeleteUserOutput>;
}
