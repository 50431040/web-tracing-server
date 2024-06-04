import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';
import {
  RESOURCE_EVENT_DEFAULT_HANDLER,
  RESOURCE_EVENT_QUEUE,
} from '../base/queue';
import { ResourceService } from './resource.service';
import { ResourceModel } from './resource.schema';

@Processor(RESOURCE_EVENT_QUEUE)
export class ResourceConsumer {
  constructor(private readonly resourceService: ResourceService) {}

  logger = new Logger(ResourceConsumer.name);

  @Process(RESOURCE_EVENT_DEFAULT_HANDLER)
  async handleEvent(job: Job<ResourceModel>) {
    const event = job.data;
    try {
      await this.resourceService.insertResourceEvent(event);
    } catch (err) {
      this.logger.error(err);
      job.moveToFailed({
        message: err,
      });
    }
  }
}
