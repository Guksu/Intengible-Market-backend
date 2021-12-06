import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/entitiy/product.entity';
import { PurchaseProduct } from 'src/product/entitiy/purchaseProduct.entity';
import { Repository } from 'typeorm';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dto/create-account.dto';
import { EditProfileInput, EditProfileOutput } from './dto/edit-profile.dto';
import { LoginInput, LoginOutPut } from './dto/login.dto';
import { ProductListOutput } from './dto/productList.dto';
import { PurchaseProductListOutput } from './dto/purchaseProductList.dto';
import { User } from './entitiy/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
    private readonly jwtService: JwtService,
    @InjectRepository(Product)
    private readonly product: Repository<Product>,
    @InjectRepository(PurchaseProduct)
    private readonly purchaseProduct: Repository<PurchaseProduct>,
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

  async userProductList(user: User): Promise<ProductListOutput> {
    try {
      const checkProduct = await this.product.find({
        seller: user['user'],
      });
      return {
        ok: true,
        product: checkProduct,
      };
    } catch (error) {
      return { ok: false, error: 'ProductList Error' };
    }
  }

  async userPurchaseProductList(
    user: User,
  ): Promise<PurchaseProductListOutput> {
    try {
      const checkProduct = await this.purchaseProduct.find({
        buyer: user['user'],
      });
      return {
        ok: true,
        purchaseProduct: checkProduct,
      };
    } catch (error) {
      return { ok: false, error: 'PurchaseProductList Error' };
    }
  }

  async editProfile(
    user: User,
    { newPassword }: EditProfileInput,
  ): Promise<EditProfileOutput> {
    try {
      const checkUser = await this.user.findOne(user['user'].userNo);
      if (checkUser) {
        checkUser.password = newPassword;
      }

      await this.user.save(checkUser);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: "Can't edit your profile. Try again" };
    }
  }
}
