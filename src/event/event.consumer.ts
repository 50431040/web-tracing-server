import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { EVENT_DEFAULT_HANDLER, EVENT_QUEUE } from '../base/queue';
import { EventDto } from './event.dto';
import { PvService } from '../pv/pv.service';
import { EventService } from './event.service';
import { EventType } from '../base/event-info.dto';
import { Logger } from '@nestjs/common';
import { BaseInfoModel } from '../base/base.schema';
import { PvDurationService } from '../pv-duration/pv-duration.service';
import { ClickService } from '../click/click.service';
import { ErrorService } from '../error/error.service';
import { PerformanceService } from '../performance/performance.service';
import { IntersectionService } from '../intersection/intersection.service';

@Processor(EVENT_QUEUE)
export class EventConsumer {
  constructor(
    private readonly pvService: PvService,
    private readonly eventService: EventService,
    private readonly pvDurationService: PvDurationService,
    private readonly clickService: ClickService,
    private readonly errorService: ErrorService,
    private readonly performanceService: PerformanceService,
    private readonly intersectionService: IntersectionService,
  ) {}

  logger = new Logger(EventConsumer.name);

  @Process(EVENT_DEFAULT_HANDLER)
  async handleEvent(job: Job<EventDto>) {
    try {
      const { baseInfo, eventInfo } = job.data;

      // 插入后拿到baseInfoId
      const id = await this.eventService.insertBaseInfo(
        baseInfo as BaseInfoModel,
      );

      // 根据不同的事件类型push到对应的队列中
      for (const event of eventInfo) {
        switch (event.eventType) {
          case EventType.pv:
            await this.pvService.handlePvEvent(id, event);
            break;
          case EventType.pvDuration:
            await this.pvDurationService.handlePvDurationEvent(id, event);
            break;
          case EventType.click:
            await this.clickService.handleClickEvent(id, event);
            break;
          case EventType.error:
            await this.errorService.handleErrorEvent(id, event);
            break;
          case EventType.performance:
            await this.performanceService.handlePerformanceEvent(id, event);
            break;
          case EventType.intersection:
            await this.intersectionService.handleIntersectionEvent(id, event);
            break;
          default:
            break;
        }
      }
    } catch (err) {
      this.logger.error(err);
      job.moveToFailed({
        message: err,
      });
    }
  }
}
