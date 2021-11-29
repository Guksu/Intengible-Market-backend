import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dto/create-account.dto';
import { LoginInput, LoginOutPut } from './dto/login.dto';
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
        return { ok: false, error: 'Password is wrong, try again' };
      }

      return { ok: true };
    } catch (error) {
      return {
        ok: false,
        error: error,
      };
    }
  }
}
