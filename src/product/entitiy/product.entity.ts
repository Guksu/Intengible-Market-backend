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

  @Column({ unique: true })
  @Field((type) => String)
  name: string;

  @Column()
  @Field((type) => String)
  img: string;

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

  @Field((type) => User)
  @ManyToOne((type) => User, (User) => User.product, { cascade: true })
  seller: User;
}
