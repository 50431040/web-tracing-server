import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';
import { NetworkModel } from './network.schema';
import { NetworkService } from './network.service';
import {
  NETWORK_EVENT_DEFAULT_HANDLER,
  NETWORK_EVENT_QUEUE,
} from 'src/base/queue';

@Processor(NETWORK_EVENT_QUEUE)
export class NetworkConsumer {
  constructor(private readonly networkService: NetworkService) {}

  logger = new Logger(NetworkConsumer.name);

  @Process(NETWORK_EVENT_DEFAULT_HANDLER)
  async handleEvent(job: Job<NetworkModel>) {
    const event = job.data;
    try {
      await this.networkService.insertNetworkEvent(event);
    } catch (err) {
      this.logger.error(err);
      job.moveToFailed({
        message: err,
      });
    }
  }
}
