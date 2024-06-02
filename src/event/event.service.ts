import { Injectable } from '@nestjs/common';
import { EventDto } from './event.dto';
import { EventType } from '../base/event-info.dto';
import { PvService } from '../pv/pv.service';

@Injectable()
export class EventService {
  constructor(private readonly pvService: PvService) {}
  async handle(body: EventDto) {
    const { eventInfo } = body;
    for (const event of eventInfo) {
      
    }
  }
}
