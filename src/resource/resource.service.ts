import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ResourceModel } from './resource.schema';
import { Model, Types } from 'mongoose';
import {
  RESOURCE_EVENT_DEFAULT_HANDLER,
  RESOURCE_EVENT_QUEUE,
} from '../base/queue';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { EventInfoDto } from '../base/event-info.dto';

@Injectable()
export class ResourceService {
  constructor(
    @InjectModel(ResourceModel.name)
    private resourceModel: Model<ResourceModel>,
    @InjectQueue(RESOURCE_EVENT_QUEUE)
    private resourceEventQueue: Queue,
  ) {}
  // 处理事件
  async handleResourceEvent(
    baseId: Types.ObjectId,
    resourceEvent: EventInfoDto,
  ) {
    const event = resourceEvent as ResourceModel;
    event._baseId = baseId;
    await this.resourceEventQueue.add(RESOURCE_EVENT_DEFAULT_HANDLER, event, {
      removeOnComplete: true,
    });
  }

  // 插入事件
  async insertResourceEvent(resourceEvent: ResourceModel) {
    await this.resourceModel.create(resourceEvent);
  }
}
