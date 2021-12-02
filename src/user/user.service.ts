import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dto/create-account.dto';
import { DeleteUserInput, DeleteUserOutput } from './dto/delete-user.dto';
import { EditProfileInput, EditProfileOutput } from './dto/edit-profile.dto';
import { LoginInput, LoginOutPut } from './dto/login.dto';
import { UserProfileInput, UserProfileOutput } from './dto/userProfile.dto';
import { User } from './entitiy/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async craateAccount({
    id,
    password,
  }: CreateAccountInput): Promise<CreateAccountOutput> {
    try {
      const exists = await this.user.findOne({ id });
      if (exists) {
        return { ok: false, error: 'Id is already exist' };
      }

      await this.user.save(this.user.create({ id, password }));

      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async login({ id, password }: LoginInput): Promise<LoginOutPut> {
    try {
      const loginUser = await this.user.findOne(
        { id },
        { select: ['password'] },
      );

      if (!loginUser) {
        return { ok: false, error: "User doesn't exist" };
      }

      const checkPassword = await loginUser.checkPassword(password);
      if (!checkPassword) {
        return { ok: false, error: 'Password is wrong. Try again' };
      }

      const payload = { id };
      const accessToken = await this.jwtService.sign(payload);
      return { ok: true, token: accessToken };
    } catch (error) {
      return {
        ok: false,
        error: error,
      };
    }
  }

  async userProfile({ id }: UserProfileInput): Promise<UserProfileOutput> {
    try {
      const user = await this.user.findOneOrFail({ id });
      return { ok: true, user };
    } catch (error) {
      return { ok: false, error: 'Profile is somthing wrong' };
    }
  }

  async editProfile(
    user: User,
    { id, password }: EditProfileInput,
  ): Promise<EditProfileOutput> {
    try {
      const checkUser = await this.user.findOne(user.userNo);

      if (id) {
        checkUser.id = id;
      }

      if (password) {
        user.password = password;
      }

      await this.user.save(checkUser);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: "Can't edit your profile. Try again" };
    }
  }

  async deleteUser(
    user: User,
    { id, password }: DeleteUserInput,
  ): Promise<DeleteUserOutput> {
    try {
      const delteCheckUser = await this.user.findOne(user.userNo);
      const deleteCheckPassword = await delteCheckUser.checkPassword(password);

      if (id != delteCheckUser.id) {
        return { ok: false, error: 'Check again' };
      }

      if (!deleteCheckPassword) {
        return { ok: false, error: "Check again you'r Password" };
      }

      await this.user.delete(delteCheckUser);

      return { ok: true };
    } catch (error) {
      return {
        ok: false,
        error: error,
      };
    }
  }
}
