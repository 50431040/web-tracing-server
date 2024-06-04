import { Module } from '@nestjs/common';
import { NetworkService } from './network.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NetworkModel, NetworkSchema } from './network.schema';
import { NetworkConsumer } from './network.consumer';
import { BullModule } from '@nestjs/bull';
import { NETWORK_EVENT_QUEUE } from 'src/base/queue';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NetworkModel.name, schema: NetworkSchema },
    ]),
    BullModule.registerQueue({
      name: NETWORK_EVENT_QUEUE,
    }),
  ],
  providers: [NetworkService, NetworkConsumer],
  exports: [NetworkService],
})
export class NetworkModule {}
