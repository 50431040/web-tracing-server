import { Injectable } from '@nestjs/common';
import { EventDto } from './event.dto';
import { InjectQueue } from '@nestjs/bull';
import { EVENT_DEFAULT_HANDLER, EVENT_QUEUE } from '../base/queue';
import { Queue } from 'bull';
import { InjectModel } from '@nestjs/mongoose';
import { BaseInfoModel } from '../base/base.schema';
import { Model } from 'mongoose';

@Injectable()
export class EventService {
  constructor(
    @InjectQueue(EVENT_QUEUE)
    private eventQueue: Queue,
    @InjectModel(BaseInfoModel.name)
    private baseInfoModel: Model<BaseInfoModel>,
  ) {}
  // 处理事件，push到队列中
  async handle(body: EventDto) {
    await this.eventQueue.add(EVENT_DEFAULT_HANDLER, body, {
      removeOnComplete: true,
    });
  }

  // 创建baseInfo
  async insertBaseInfo(data: BaseInfoModel) {
    const doc = new this.baseInfoModel(data);
    await doc.save();
    return doc._id;
  }
}
