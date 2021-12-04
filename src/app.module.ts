import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entitiy/user.entity';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { Product } from './product/entitiy/product.entity';
import { PurchaseProduct } from './product/entitiy/purchaseProduct.entity';
import { BoardModule } from './board/board.module';
import { RequestBoard } from './board/entity/request.entity';
import { ReviewBoard } from './board/entity/review.entity';
import { AuthModule } from './auth/auth.module';
require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.PASSWORD,
      database: 'intengible-market',
      entities: [User, Product, PurchaseProduct, RequestBoard, ReviewBoard],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({ req, connection }) => {
        if (req) {
          const user = req.headers.authorization;
          return { ...req, user };
        } else {
          return connection;
        }
      },
    }),
    UserModule,
    ProductModule,
    BoardModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
