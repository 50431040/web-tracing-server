import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { PV_EVENT_DEFAULT_HANDLER, PV_EVENT_QUEUE } from '../base/queue';
import { PvService } from './pv.service';
import { PvModel } from './pv.schema';
import { Logger } from '@nestjs/common';

@Processor(PV_EVENT_QUEUE)
export class PvConsumer {
  constructor(private readonly pvService: PvService) {}

  logger = new Logger(PvConsumer.name);

  @Process(PV_EVENT_DEFAULT_HANDLER)
  async handleEvent(job: Job<PvModel>) {
    const event = job.data;
    try {
      await this.pvService.insertPvEvent(event);
    } catch (err) {
      this.logger.error(err);
      job.moveToFailed({
        message: err,
      });
    }
  }
}
