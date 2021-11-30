import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType('ProductInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  productNo: number;

  @Column({ unique: true })
  @Field((type) => String)
  name: string;

  @Column()
  @Field((type) => String)
  description: string;

  @Column()
  @Field((type) => Number)
  price: number;

  @Column()
  @Field((type) => Number)
  volume: number;

  @Column()
  @Field((type) => Number)
  nowVolume: number;

  @Column()
  @Field((type) => Number)
  seller: number;
}
