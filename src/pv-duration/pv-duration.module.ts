import { Module } from '@nestjs/common';
import { PvDurationService } from './pv-duration.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PvDurationModel, PvDurationSchema } from './pv-duration.schema';
import { PvDurationConsumer } from './pv-duration.consumer';
import { BullModule } from '@nestjs/bull';
import { PV_DURATION_EVENT_QUEUE } from 'src/base/queue';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PvDurationModel.name, schema: PvDurationSchema },
    ]),
    BullModule.registerQueue({
      name: PV_DURATION_EVENT_QUEUE,
    }),
  ],
  providers: [PvDurationService, PvDurationConsumer],
  exports: [PvDurationService],
})
export class PvDurationModule {}
