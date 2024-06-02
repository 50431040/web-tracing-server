import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { CLICK_EVENT_DEFAULT_HANDLER, CLICK_EVENT_QUEUE } from '../base/queue';
import { Logger } from '@nestjs/common';
import { ClickService } from './click.service';
import { ClickModel } from './click.schema';

@Processor(CLICK_EVENT_QUEUE)
export class ClickConsumer {
  constructor(private readonly clickService: ClickService) {}

  logger = new Logger(ClickConsumer.name);

  @Process(CLICK_EVENT_DEFAULT_HANDLER)
  async handleEvent(job: Job<ClickModel>) {
    const event = job.data;
    try {
      await this.clickService.insertClickEvent(event);
    } catch (err) {
      this.logger.error(err);
      job.moveToFailed({
        message: err,
      });
    }
  }
}
