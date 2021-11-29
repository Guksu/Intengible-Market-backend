import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dto/create-account.dto';
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
        return { ok: false, error: 'Id is already exists' };
      }

      await this.user.save(this.user.create({ id, password }));

      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }
}
