import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';
import {
  PV_DURATION_EVENT_DEFAULT_HANDLER,
  PV_DURATION_EVENT_QUEUE,
} from 'src/base/queue';
import { PvDurationService } from './pv-duration.service';
import { PvDurationModel } from './pv-duration.schema';

@Processor(PV_DURATION_EVENT_QUEUE)
export class PvDurationConsumer {
  constructor(private readonly pvDurationService: PvDurationService) {}

  logger = new Logger(PvDurationConsumer.name);

  @Process(PV_DURATION_EVENT_DEFAULT_HANDLER)
  async handleEvent(job: Job<PvDurationModel>) {
    const event = job.data;
    try {
      await this.pvDurationService.insertPvDurationEvent(event);
    } catch (err) {
      this.logger.error(err);
      job.moveToFailed({
        message: err,
      });
    }
  }
}
