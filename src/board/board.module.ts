import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestBoard } from './entity/request.entity';
import { ReviewBoard } from './entity/review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RequestBoard, ReviewBoard])],
})
export class BoardModule {}
