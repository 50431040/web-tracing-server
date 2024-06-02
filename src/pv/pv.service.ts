import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { PvModel } from './pv.schema';
import { EventInfoDto } from '../base/event-info.dto';
import { InjectQueue } from '@nestjs/bull';
import { PV_EVENT_DEFAULT_HANDLER, PV_EVENT_QUEUE } from 'src/base/queue';
import { Queue } from 'bull';

@Injectable()
export class PvService {
  constructor(
    @InjectModel(PvModel.name) private pvModel: Model<PvModel>,
    @InjectQueue(PV_EVENT_QUEUE)
    private pvEventQueue: Queue,
  ) {}

  // 处理事件
  async handlePvEvent(baseId: Types.ObjectId, pvEvent: EventInfoDto) {
    const event = pvEvent as PvModel;
    event._baseId = baseId;
    await this.pvEventQueue.add(PV_EVENT_DEFAULT_HANDLER, event, {
      removeOnComplete: true,
    });
  }

  // 插入事件
  async insertPvEvent(pvEvent: PvModel) {
    await this.pvModel.create(pvEvent);
  }
}
