import { Injectable } from '@nestjs/common';
import { EventDto } from './event.dto';
import { EventType } from '../base/event-info.dto';
import { PvService } from '../pv/pv.service';

@Injectable()
export class EventService {
  constructor(private readonly pvService: PvService) {}
  async handle(body: EventDto) {
    const { baseInfo, eventInfo } = body;
    for (const event of eventInfo) {
      if (event.eventType === EventType.pv) {
        await this.pvService.handle(baseInfo, event);
      }
    }
  }
}
