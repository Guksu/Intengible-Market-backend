import { Injectable } from '@nestjs/common';
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
    @InjectRepository(User) private readonly user: Repository<User>,
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

      return { ok: true };
    } catch (error) {
      return {
        ok: false,
        error: error,
      };
    }
  }

  async userProfile({ userNo }: UserProfileInput): Promise<UserProfileOutput> {
    try {
      const user = await this.user.findOneOrFail(userNo);
      return { ok: true, user };
    } catch (error) {
      return { ok: false, error: 'Profile is somthing wrong' };
    }
  }

  async editProfile({
    password,
    userNo,
  }: EditProfileInput): Promise<EditProfileOutput> {
    try {
      const user = await this.user.findOne(userNo);

      if (password) {
        user.password = password;
      }

      await this.user.save(user);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: "Can't edit your profile. Try again" };
    }
  }

  async deleteUser({
    id,
    password,
  }: DeleteUserInput): Promise<DeleteUserOutput> {
    try {
      const delteCheckId = await this.user.findOne(
        { id },
        { select: ['password'] },
      );
      const deleteCheckPassword = await delteCheckId.checkPassword(password);

      if (!delteCheckId) {
        return { ok: false, error: "Check again you'r ID" };
      }

      if (!deleteCheckPassword) {
        return { ok: false, error: "Check again you'r Password" };
      }

      await this.user.delete(delteCheckId);

      return { ok: true };
    } catch (error) {
      return {
        ok: false,
        error: error,
      };
    }
  }
}
