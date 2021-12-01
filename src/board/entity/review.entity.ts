import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType('ReviewBoardInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class ReviewBoard {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  reviewNo: number;

  @Column()
  @Field((type) => String)
  writer: string;

  @Column()
  @Field((type) => String)
  title: string;

  @Column()
  @Field((type) => String)
  content: string;
}
