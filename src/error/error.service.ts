import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ErrorModel } from './error.schema';
import { Model, Types } from 'mongoose';
import { Queue } from 'bull';
import { ERROR_EVENT_DEFAULT_HANDLER, ERROR_EVENT_QUEUE } from '../base/queue';
import { EventInfoDto } from 'src/base/event-info.dto';

@Injectable()
export class ErrorService {
  constructor(
    @InjectModel(ErrorModel.name)
    private errorModel: Model<ErrorModel>,
    @InjectQueue(ERROR_EVENT_QUEUE)
    private errorEventQueue: Queue,
  ) {}
  // 处理事件
  async handleErrorEvent(baseId: Types.ObjectId, errorEvent: EventInfoDto) {
    const event = errorEvent as ErrorModel;
    event._baseId = baseId;
    await this.errorEventQueue.add(ERROR_EVENT_DEFAULT_HANDLER, event, {
      removeOnComplete: true,
    });
  }

  // 插入事件
  async insertErrorEvent(errorEvent: ErrorModel) {
    await this.errorModel.create(errorEvent);
  }
}
