import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entitiy/user.entity';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { Product } from './product/entitiy/product.entity';
import { PurchaseProduct } from './product/entitiy/purchaseProduct.entity';
import { JwtMiddleware } from './user/jwt.middleware';
import { GuardModule } from './guard/guard.module';
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
      entities: [User, Product, PurchaseProduct],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({ req }) => ({ user: req['user'] }),
    }),
    UserModule,
    ProductModule,
    GuardModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes({
      path: '/graphql',
      method: RequestMethod.POST,
    });
  }
}
