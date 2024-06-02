import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';
import {
  PERFORMANCE_EVENT_DEFAULT_HANDLER,
  PERFORMANCE_EVENT_QUEUE,
} from '../base/queue';
import { PerformanceService } from './performance.service';
import { PerformanceModel } from './performance.schema';

@Processor(PERFORMANCE_EVENT_QUEUE)
export class PerformanceConsumer {
  constructor(private readonly performanceService: PerformanceService) {}

  logger = new Logger(PerformanceConsumer.name);

  @Process(PERFORMANCE_EVENT_DEFAULT_HANDLER)
  async handleEvent(job: Job<PerformanceModel>) {
    const event = job.data;
    try {
      await this.performanceService.insertPerformanceEvent(event);
    } catch (err) {
      this.logger.error(err);
      job.moveToFailed({
        message: err,
      });
    }
  }
}
