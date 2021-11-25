import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
