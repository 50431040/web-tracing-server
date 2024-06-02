import { Module } from '@nestjs/common';
import { PvService } from './pv.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PvModel, PvSchema } from './pv.schema';
import { BullModule } from '@nestjs/bull';
import { PV_EVENT_QUEUE } from '../base/queue';
import { PvConsumer } from './pv.consumer';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PvModel.name, schema: PvSchema }]),
    BullModule.registerQueue({
      name: PV_EVENT_QUEUE,
    }),
  ],
  providers: [PvService, PvConsumer],
  exports: [PvService],
})
export class PvModule {}
