import { Module } from '@nestjs/common';
import { ResourceService } from './resource.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ResourceModel, ResourceSchema } from './resource.schema';
import { BullModule } from '@nestjs/bull';
import { RESOURCE_EVENT_QUEUE } from '../base/queue';
import { ResourceConsumer } from './resource.consumer';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ResourceModel.name, schema: ResourceSchema },
    ]),
    BullModule.registerQueue({
      name: RESOURCE_EVENT_QUEUE,
    }),
  ],
  providers: [ResourceService, ResourceConsumer],
  exports: [ResourceService],
})
export class ResourceModule {}
