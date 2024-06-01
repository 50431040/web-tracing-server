import { Module } from '@nestjs/common';
import { PvService } from './pv.service';
import { PvController } from './pv.controller';

@Module({
  controllers: [PvController],
  providers: [PvService],
})
export class PvModule {}
