import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/entitiy/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@InputType('ProductInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  productNo: number;

  @Column()
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

  @Field((type) => User)
  @ManyToOne((type) => User, (user) => user.product, { onDelete: 'CASCADE' })
  seller: User;
}
