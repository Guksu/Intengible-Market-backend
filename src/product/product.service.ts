import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  RegisterProductInput,
  RegisterProductOutput,
} from './dto/registerProduct.dto';
import { Product } from './entitiy/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly product: Repository<Product>,
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
}
