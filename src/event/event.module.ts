import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { PvModule } from '../pv/pv.module';
import { BullModule } from '@nestjs/bull';
import { EVENT_QUEUE } from '../base/queue';
import { MongooseModule } from '@nestjs/mongoose';
import { BaseInfoModel, BaseInfoSchema } from '../base/base.schema';
import { EventConsumer } from './event.consumer';

@Module({
  imports: [
    PvModule,
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
