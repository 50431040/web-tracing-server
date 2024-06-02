import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { PvDurationModel } from './pv-duration.schema';
import {
  PV_DURATION_EVENT_DEFAULT_HANDLER,
  PV_DURATION_EVENT_QUEUE,
} from '../base/queue';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { EventInfoDto } from '../base/event-info.dto';

@Injectable()
export class PvDurationService {
  constructor(
    @InjectModel(PvDurationModel.name)
    private pvDurationModel: Model<PvDurationModel>,
    @InjectQueue(PV_DURATION_EVENT_QUEUE)
    private pvEventQueue: Queue,
  ) {}
  // 处理事件
  async handlePvDurationEvent(
    baseId: Types.ObjectId,
    pvDurationEvent: EventInfoDto,
  ) {
    const event = pvDurationEvent as PvDurationModel;
    event._baseId = baseId;
    await this.pvEventQueue.add(PV_DURATION_EVENT_DEFAULT_HANDLER, event, {
      removeOnComplete: true,
    });
  }

  // 插入事件
  async insertPvDurationEvent(pvDurationEvent: PvDurationModel) {
    await this.pvDurationModel.create(pvDurationEvent);
  }
}
