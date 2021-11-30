import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType('PurchaseProductInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class PurchaseProduct {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  purchaseProductNo: number;

  @Column()
  @Field((type) => String)
  name: string;

  @Column()
  @Field((type) => Number)
  volume: number;

  @Column()
  @Field((type) => Number)
  buyer: number;
}
