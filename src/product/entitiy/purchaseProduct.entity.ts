import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/entitiy/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @Field((type) => User)
  @ManyToOne((type) => User, (User) => User.PurchaseProduct, { cascade: true })
  buyer: User;
}
