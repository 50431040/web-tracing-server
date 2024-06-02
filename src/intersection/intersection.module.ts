import { Module } from '@nestjs/common';
import { IntersectionService } from './intersection.service';
import { MongooseModule } from '@nestjs/mongoose';
import { IntersectionModel, IntersectionSchema } from './intersection.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: IntersectionModel.name, schema: IntersectionSchema },
    ]),
  ],
  providers: [IntersectionService],
})
export class IntersectionModule {}
