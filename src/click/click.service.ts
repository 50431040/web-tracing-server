import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClickModel } from './click.schema';
import { Model, Types } from 'mongoose';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { CLICK_EVENT_DEFAULT_HANDLER, CLICK_EVENT_QUEUE } from '../base/queue';
import { EventInfoDto } from '../base/event-info.dto';

@Injectable()
export class ClickService {
  constructor(
    @InjectModel(ClickModel.name)
    private clickModel: Model<ClickModel>,
    @InjectQueue(CLICK_EVENT_QUEUE)
    private clickEventQueue: Queue,
  ) {}
  // 处理事件
  async handleClickEvent(baseId: Types.ObjectId, clickEvent: EventInfoDto) {
    const event = clickEvent as ClickModel;
    event._baseId = baseId;
    await this.clickEventQueue.add(CLICK_EVENT_DEFAULT_HANDLER, event, {
      removeOnComplete: true,
    });
  }

  // 插入事件
  async insertClickEvent(clickEvent: ClickModel) {
    await this.clickModel.create(clickEvent);
  }
}
