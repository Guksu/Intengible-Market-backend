import { CreateAccountInput, CreateAccountOutput } from './dto/create-account.dto';
import { EditProfileInput, EditProfileOutput } from './dto/edit-profile.dto';
import { LoginInput, LoginOutPut } from './dto/login.dto';
import { ProductListOutput } from './dto/productList.dto';
import { PurchaseProductListOutput } from './dto/purchaseProductList.dto';
import { User } from './entitiy/user.entity';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    createAccount(createAccountInput: CreateAccountInput): Promise<CreateAccountOutput>;
    login(loginInput: LoginInput): Promise<LoginOutPut>;
    userProductList(user: User): Promise<ProductListOutput>;
    userPurchaseProductList(user: User): Promise<PurchaseProductListOutput>;
    editProfile(user: User, editProfileInput: EditProfileInput): Promise<EditProfileOutput>;
}
