import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';
import { IntersectionModel } from './Intersection.schema';
import {
  INTERSECTION_EVENT_DEFAULT_HANDLER,
  INTERSECTION_EVENT_QUEUE,
} from '../base/queue';
import { IntersectionService } from './intersection.service';

@Processor(INTERSECTION_EVENT_QUEUE)
export class IntersectionConsumer {
  constructor(private readonly intersectionService: IntersectionService) {}

  logger = new Logger(IntersectionConsumer.name);

  @Process(INTERSECTION_EVENT_DEFAULT_HANDLER)
  async handleEvent(job: Job<IntersectionModel>) {
    const event = job.data;
    try {
      await this.intersectionService.insertIntersectionEvent(event);
    } catch (err) {
      this.logger.error(err);
      job.moveToFailed({
        message: err,
      });
    }
  }
}
