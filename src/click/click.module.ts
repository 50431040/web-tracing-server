import { Module } from '@nestjs/common';
import { ClickService } from './click.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClickModel, ClickSchema } from './click.schema';
import { ClickConsumer } from './click.consumer';
import { BullModule } from '@nestjs/bull';
import { CLICK_EVENT_QUEUE } from '../base/queue';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ClickModel.name, schema: ClickSchema }]),
    BullModule.registerQueue({
      name: CLICK_EVENT_QUEUE,
    }),
  ],
  providers: [ClickService, ClickConsumer],
  exports: [ClickService],
})
export class ClickModule {}
