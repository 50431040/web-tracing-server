import { Body, Controller, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { EventDto } from './event.dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post('track')
  async handleEvent(@Body() body: EventDto) {
    await this.eventService.handle(body);
    return null;
  }
}
