import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entitiy/user.entity';
import { Like, Repository } from 'typeorm';
import {
  PurchaseProductInput,
  PurchaseProductOutput,
} from './dto/purchaseProduct.dto';
import {
  RegisterProductInput,
  RegisterProductOutput,
} from './dto/registerProduct.dto';
import { GetProductOutput } from './dto/getProduct.dto';
import { Product } from './entitiy/product.entity';
import { PurchaseProduct } from './entitiy/purchaseProduct.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly product: Repository<Product>,
    @InjectRepository(PurchaseProduct)
    private readonly purchase: Repository<PurchaseProduct>,
  ) {}

  async registerProduct(
    user: User,
    registerProductInput: RegisterProductInput,
  ): Promise<RegisterProductOutput> {
    try {
      const exists = await this.product.findOne(registerProductInput.name);
      if (exists) {
        return { ok: false, error: 'Product name is already exist.' };
      }

      const newProduct = this.product.create(registerProductInput);
      newProduct.nowVolume = newProduct.volume;
      newProduct.seller = user['user'];
      await this.product.save(newProduct);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async purchaseProduct(
    user: User,
    { name, volume }: PurchaseProductInput,
  ): Promise<PurchaseProductOutput> {
    try {
      const checkProduct = await this.product.findOne({ name });
      if (checkProduct.nowVolume === 0) {
        return { ok: false, error: 'This Product is sold out!' };
      } else if (checkProduct.nowVolume < volume) {
        return {
          ok: false,
          error: 'You bought more than the inventory of the product.',
        };
      } else {
        checkProduct.nowVolume -= volume;
        await this.product.save(checkProduct);
      }

      await this.purchase.save(
        this.purchase.create({ name, volume, buyer: user['user'] }),
      );
      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async getProduct(): Promise<GetProductOutput> {
    try {
      const searchP = await this.product.find();

      if (searchP[0] === undefined) {
        return { ok: false, error: "Can't find Product" };
      }

      return { ok: true, product: searchP };
    } catch (error) {
      return { ok: false, error: error };
    }
  }
}
