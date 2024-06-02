import { Module } from '@nestjs/common';
import { ErrorService } from './error.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ErrorModel, ErrorSchema } from './error.schema';
import { BullModule } from '@nestjs/bull';
import { ERROR_EVENT_QUEUE } from '../base/queue';
import { ErrorConsumer } from './error.consumer';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ErrorModel.name, schema: ErrorSchema }]),
    BullModule.registerQueue({
      name: ERROR_EVENT_QUEUE,
    }),
  ],
  providers: [ErrorService, ErrorConsumer],
  exports: [ErrorService],
})
export class ErrorModule {}
