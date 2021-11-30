import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import {
  PurchaseProductInput,
  PurchaseProductOutput,
} from './dto/purchaseProduct.dto';
import {
  RegisterProductInput,
  RegisterProductOutput,
} from './dto/registerProduct.dto';
import {
  SearchProductInput,
  SearchProductOutput,
} from './dto/searchProduct.dto';
import { Product } from './entitiy/product.entity';
import { PurchaseProduct } from './entitiy/purchaseProduct.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly product: Repository<Product>,
    @InjectRepository(PurchaseProduct)
    private readonly purchase: Repository<PurchaseProduct>,
  ) {}

  async registerProduct({
    name,
    price,
    description,
    volume,
    seller,
  }: RegisterProductInput): Promise<RegisterProductOutput> {
    try {
      const exists = await this.product.findOne({ name });
      if (exists) {
        return { ok: false, error: 'Product name is already exist.' };
      }

      const newProduct = this.product.create({
        name,
        price,
        description,
        volume,
        seller,
      });

      await this.product.save(newProduct);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async purchaseProduct({
    name,
    volume,
    buyer,
  }: PurchaseProductInput): Promise<PurchaseProductOutput> {
    try {
      const checkProduct = await this.product.findOne({ name });
      if (checkProduct.nowVolume === 0) {
        return { ok: false, error: 'This Product is sold out!' };
      } else {
        checkProduct.nowVolume -= volume;
        await this.product.save(checkProduct);
      }

      await this.purchase.save(this.purchase.create({ name, volume, buyer }));
      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async searchProduct({
    name,
  }: SearchProductInput): Promise<SearchProductOutput> {
    try {
      const searchP = await this.product.find({
        where: { name: Like(`%${name}%`) },
      });

      if (searchP[0] === undefined) {
        return { ok: false, error: "Can't find Product" };
      }

      return { ok: true, product: searchP };
    } catch (error) {
      return { ok: false, error: error };
    }
  }
}
