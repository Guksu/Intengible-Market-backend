import { JwtService } from '@nestjs/jwt';
import { Product } from 'src/product/entitiy/product.entity';
import { PurchaseProduct } from 'src/product/entitiy/purchaseProduct.entity';
import { Repository } from 'typeorm';
import { CreateAccountInput, CreateAccountOutput } from './dto/create-account.dto';
import { EditProfileInput, EditProfileOutput } from './dto/edit-profile.dto';
import { LoginInput, LoginOutPut } from './dto/login.dto';
import { ProductListOutput } from './dto/productList.dto';
import { PurchaseProductListOutput } from './dto/purchaseProductList.dto';
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
    userPurchaseProductList(user: User): Promise<PurchaseProductListOutput>;
    editProfile(user: User, { newPassword }: EditProfileInput): Promise<EditProfileOutput>;
}
