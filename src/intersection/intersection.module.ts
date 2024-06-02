import { Module } from '@nestjs/common';
import { IntersectionService } from './intersection.service';
import { IntersectionController } from './intersection.controller';

@Module({
  controllers: [IntersectionController],
  providers: [IntersectionService],
})
export class IntersectionModule {}
