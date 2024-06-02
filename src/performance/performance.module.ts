import { Module } from '@nestjs/common';
import { PerformanceService } from './performance.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PerformanceModel, PerformanceSchema } from './performance.schema';
import { PerformanceConsumer } from './performance.consumer';
import { BullModule } from '@nestjs/bull';
import { PERFORMANCE_EVENT_QUEUE } from '../base/queue';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PerformanceModel.name, schema: PerformanceSchema },
    ]),
    BullModule.registerQueue({
      name: PERFORMANCE_EVENT_QUEUE,
    }),
  ],
  providers: [PerformanceService, PerformanceConsumer],
  exports: [PerformanceService],
})
export class PerformanceModule {}
