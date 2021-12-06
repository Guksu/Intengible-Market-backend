import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/auth/auth.user-decorator';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dto/create-account.dto';
import { EditProfileInput, EditProfileOutput } from './dto/edit-profile.dto';
import { LoginInput, LoginOutPut } from './dto/login.dto';
import { ProductListOutput } from './dto/productList.dto';
import { PurchaseProductListOutput } from './dto/purchaseProductList.dto';
import { User } from './entitiy/user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation((type) => CreateAccountOutput)
  async createAccount(
    @Args('input') createAccountInput: CreateAccountInput,
  ): Promise<CreateAccountOutput> {
    return this.userService.craateAccount(createAccountInput);
  }

  @Mutation((type) => LoginOutPut)
  async login(@Args('input') loginInput: LoginInput): Promise<LoginOutPut> {
    return this.userService.login(loginInput);
  }

  @Query((type) => ProductListOutput)
  @UseGuards(GqlAuthGuard)
  async userProductList(
    @GetUser()
    user: User,
  ): Promise<ProductListOutput> {
    return this.userService.userProductList(user);
  }

  @Query((type) => PurchaseProductListOutput)
  @UseGuards(GqlAuthGuard)
  async userPurchaseProductList(
    @GetUser()
    user: User,
  ): Promise<PurchaseProductListOutput> {
    return this.userService.userPurchaseProductList(user);
  }

  @Mutation((type) => EditProfileOutput)
  @UseGuards(GqlAuthGuard)
  async editProfile(
    @GetUser() user: User,
    @Args('input') editProfileInput: EditProfileInput,
  ): Promise<EditProfileOutput> {
    return this.userService.editProfile(user, editProfileInput);
  }
}
