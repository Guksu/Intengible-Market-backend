import { UseGuards } from '@nestjs/common';
import { Args, InputType, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/auth/auth.user-decorator';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dto/create-account.dto';
import { DeleteUserInput, DeleteUserOutput } from './dto/delete-user.dto';
import { EditProfileInput, EditProfileOutput } from './dto/edit-profile.dto';
import { LoginInput, LoginOutPut } from './dto/login.dto';
import { UserProfileOutput } from './dto/userProfile.dto';
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

  @Query((type) => UserProfileOutput)
  @UseGuards(GqlAuthGuard)
  async userProfile(
    @GetUser()
    user: User,
  ): Promise<UserProfileOutput> {
    return this.userService.userProfile(user);
  }

  @Mutation((type) => EditProfileOutput)
  @UseGuards(GqlAuthGuard)
  async editProfile(
    @GetUser() user: User,
    @Args('input') editProfileInput: EditProfileInput,
  ): Promise<EditProfileOutput> {
    return this.userService.editProfile(user, editProfileInput);
  }

  @Mutation((type) => DeleteUserOutput)
  @UseGuards(GqlAuthGuard)
  async deleteUser(
    @GetUser() user: User,
    @Args('Input') delteUserInput: DeleteUserInput,
  ) {
    return this.userService.deleteUser(user, delteUserInput);
  }
}
