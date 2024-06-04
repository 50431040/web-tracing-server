import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NetworkModel } from './network.schema';
import { Model, Types } from 'mongoose';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { EventInfoDto } from '../base/event-info.dto';
import {
  NETWORK_EVENT_DEFAULT_HANDLER,
  NETWORK_EVENT_QUEUE,
} from '../base/queue';

@Injectable()
export class NetworkService {
  constructor(
    @InjectModel(NetworkModel.name)
    private NetworkModel: Model<NetworkModel>,
    @InjectQueue(NETWORK_EVENT_QUEUE)
    private NetworkEventQueue: Queue,
  ) {}
  // 处理事件
  async handleNetworkEvent(baseId: Types.ObjectId, NetworkEvent: EventInfoDto) {
    const event = NetworkEvent as NetworkModel;
    event._baseId = baseId;
    await this.NetworkEventQueue.add(NETWORK_EVENT_DEFAULT_HANDLER, event, {
      removeOnComplete: true,
    });
  }

  // 插入事件
  async insertNetworkEvent(NetworkEvent: NetworkModel) {
    await this.NetworkModel.create(NetworkEvent);
  }
}
