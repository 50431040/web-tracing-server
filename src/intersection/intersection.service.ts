import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IntersectionModel } from './intersection.schema';
import { Model, Types } from 'mongoose';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import {
  INTERSECTION_EVENT_DEFAULT_HANDLER,
  INTERSECTION_EVENT_QUEUE,
} from '../base/queue';
import { EventInfoDto } from '../base/event-info.dto';

@Injectable()
export class IntersectionService {
  constructor(
    @InjectModel(IntersectionModel.name)
    private intersectionModel: Model<IntersectionModel>,
    @InjectQueue(INTERSECTION_EVENT_QUEUE)
    private intersectionEventQueue: Queue,
  ) {}
  // 处理事件
  async handleIntersectionEvent(
    baseId: Types.ObjectId,
    intersectionEvent: EventInfoDto,
  ) {
    const event = intersectionEvent as IntersectionModel;
    event._baseId = baseId;
    await this.intersectionEventQueue.add(
      INTERSECTION_EVENT_DEFAULT_HANDLER,
      event,
      {
        removeOnComplete: true,
      },
    );
  }

  // 插入事件
  async insertIntersectionEvent(intersectionEvent: IntersectionModel) {
    await this.intersectionModel.create(intersectionEvent);
  }
}
