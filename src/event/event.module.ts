import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { PvModule } from '../pv/pv.module';
import { BullModule } from '@nestjs/bull';
import { EVENT_QUEUE } from '../base/queue';
import { MongooseModule } from '@nestjs/mongoose';
import { BaseInfoModel, BaseInfoSchema } from '../base/base.schema';
import { EventConsumer } from './event.consumer';
import { PvDurationModule } from '../pv-duration/pv-duration.module';
import { ClickModule } from '../click/click.module';
import { ErrorModule } from '../error/error.module';
import { PerformanceModule } from '../performance/performance.module';
import { IntersectionModule } from '../intersection/intersection.module';
import { NetworkModule } from '../network/network.module';
import { ResourceModule } from '../resource/resource.module';

@Module({
  imports: [
    PvModule,
    PvDurationModule,
    ClickModule,
    ErrorModule,
    PerformanceModule,
    IntersectionModule,
    NetworkModule,
    ResourceModule,
    BullModule.registerQueue({
      name: EVENT_QUEUE,
    }),
    MongooseModule.forFeature([
      { name: BaseInfoModel.name, schema: BaseInfoSchema },
    ]),
  ],
  controllers: [EventController],
  providers: [EventService, EventConsumer],
})
export class EventModule {}
