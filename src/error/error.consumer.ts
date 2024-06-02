import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';
import { ERROR_EVENT_DEFAULT_HANDLER, ERROR_EVENT_QUEUE } from 'src/base/queue';
import { ErrorService } from './error.service';
import { ErrorModel } from './error.schema';

@Processor(ERROR_EVENT_QUEUE)
export class ErrorConsumer {
  constructor(private readonly errorService: ErrorService) {}

  logger = new Logger(ErrorConsumer.name);

  @Process(ERROR_EVENT_DEFAULT_HANDLER)
  async handleEvent(job: Job<ErrorModel>) {
    const event = job.data;
    try {
      await this.errorService.insertErrorEvent(event);
    } catch (err) {
      this.logger.error(err);
      job.moveToFailed({
        message: err,
      });
    }
  }
}
