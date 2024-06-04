import { Module } from '@nestjs/common';
import { NetworkService } from './network.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NetworkModel, NetworkSchema } from './network.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NetworkModel.name, schema: NetworkSchema },
    ]),
  ],
  providers: [NetworkService],
})
export class NetworkModule {}
