import { InternalServerErrorException } from '@nestjs/common';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Product } from 'src/product/entitiy/product.entity';
import { PurchaseProduct } from 'src/product/entitiy/purchaseProduct.entity';

@InputType('UserInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  userNo: number;

  @Column({ unique: true })
  @Field((type) => String)
  @IsString()
  id: string;

  @Column()
  @Field((type) => String)
  @IsString()
  password: string;

  @Field((type) => [Product], { nullable: true })
  @OneToMany((type) => Product, (Product) => Product.seller, {
    onDelete: 'CASCADE',
  })
  product: [Product];

  @Field((type) => [PurchaseProduct])
  @OneToMany(
    (type) => PurchaseProduct,
    (PurchaseProduct) => PurchaseProduct.buyer,
    { onDelete: 'CASCADE' },
  )
  PurchaseProduct: [PurchaseProduct];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (this.password) {
      try {
        this.password = await bcrypt.hash(this.password, 10);
      } catch (error) {
        console.log(error);
        throw new InternalServerErrorException();
      }
    }
  }

  async checkPassword(checkPassword: string): Promise<boolean> {
    try {
      return await bcrypt.compare(checkPassword, this.password);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
