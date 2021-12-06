import { JwtService } from '@nestjs/jwt';
import { Product } from 'src/product/entitiy/product.entity';
import { PurchaseProduct } from 'src/product/entitiy/purchaseProduct.entity';
import { Repository } from 'typeorm';
import { CreateAccountInput, CreateAccountOutput } from './dto/create-account.dto';
import { DeleteUserInput, DeleteUserOutput } from './dto/delete-user.dto';
import { EditProfileInput, EditProfileOutput } from './dto/edit-profile.dto';
import { LoginInput, LoginOutPut } from './dto/login.dto';
import { ProductListOutput } from './dto/productList';
import { User } from './entitiy/user.entity';
export declare class UserService {
    private readonly user;
    private readonly jwtService;
    private readonly product;
    private readonly purchaseProduct;
    constructor(user: Repository<User>, jwtService: JwtService, product: Repository<Product>, purchaseProduct: Repository<PurchaseProduct>);
    craateAccount({ id, password, }: CreateAccountInput): Promise<CreateAccountOutput>;
    login({ id, password }: LoginInput): Promise<LoginOutPut>;
    userProductList(user: User): Promise<ProductListOutput>;
    editProfile(user: User, { newPassword }: EditProfileInput): Promise<EditProfileOutput>;
    deleteUser(user: User, { id, password }: DeleteUserInput): Promise<DeleteUserOutput>;
}
