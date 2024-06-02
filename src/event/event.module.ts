import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { PvModule } from '../pv/pv.module';

@Module({
  imports: [PvModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
