import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entitiy/user.entity';
import { Product } from './entitiy/product.entity';
import { PurchaseProduct } from './entitiy/purchaseProduct.entity';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, PurchaseProduct, User])],
  providers: [ProductResolver, ProductService],
  exports: [ProductService],
})
export class ProductModule {}
