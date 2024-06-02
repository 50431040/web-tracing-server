import { Module } from '@nestjs/common';
import { IntersectionService } from './intersection.service';
import { MongooseModule } from '@nestjs/mongoose';
import { IntersectionModel, IntersectionSchema } from './intersection.schema';
import { IntersectionConsumer } from './intersection.consumer';
import { BullModule } from '@nestjs/bull';
import { INTERSECTION_EVENT_QUEUE } from '../base/queue';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: IntersectionModel.name, schema: IntersectionSchema },
    ]),
    BullModule.registerQueue({
      name: INTERSECTION_EVENT_QUEUE,
    }),
  ],
  providers: [IntersectionService, IntersectionConsumer],
  exports: [IntersectionService],
})
export class IntersectionModule {}
