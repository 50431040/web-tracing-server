import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PerformanceModel } from './performance.schema';
import { Model, Types } from 'mongoose';
import { InjectQueue } from '@nestjs/bull';
import {
  PERFORMANCE_EVENT_DEFAULT_HANDLER,
  PERFORMANCE_EVENT_QUEUE,
} from 'src/base/queue';
import { Queue } from 'bull';
import { EventInfoDto } from '../base/event-info.dto';

@Injectable()
export class PerformanceService {
  constructor(
    @InjectModel(PerformanceModel.name)
    private performanceModel: Model<PerformanceModel>,
    @InjectQueue(PERFORMANCE_EVENT_QUEUE)
    private performanceEventQueue: Queue,
  ) {}
  // 处理事件
  async handlePerformanceEvent(
    baseId: Types.ObjectId,
    performanceEvent: EventInfoDto,
  ) {
    const event = performanceEvent as PerformanceModel;
    event._baseId = baseId;
    await this.performanceEventQueue.add(
      PERFORMANCE_EVENT_DEFAULT_HANDLER,
      event,
      {
        removeOnComplete: true,
      },
    );
  }

  // 插入事件
  async insertPerformanceEvent(performanceEvent: PerformanceModel) {
    await this.performanceModel.create(performanceEvent);
  }
}
