import { Module } from '@nestjs/common';
import { PvDurationService } from './pv-duration.service';
import { PvDurationController } from './pv-duration.controller';

@Module({
  controllers: [PvDurationController],
  providers: [PvDurationService],
})
export class PvDurationModule {}
