import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/product/entitiy/product.entity';
import { PurchaseProduct } from 'src/product/entitiy/purchaseProduct.entity';
import { User } from './entitiy/user.entity';
import { JwtStrategy } from './jwt.strategy';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
require('dotenv').config();

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: {
        expiresIn: 60 * 60,
      },
    }),
    TypeOrmModule.forFeature([User, Product, PurchaseProduct]),
  ],
  providers: [UserResolver, UserService, JwtStrategy],
  exports: [UserService, JwtStrategy],
})
export class UserModule {}
