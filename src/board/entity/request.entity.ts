import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType('RequestBoardInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class RequestBoard {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  requestNo: number;

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
