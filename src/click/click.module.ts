import { Module } from '@nestjs/common';
import { ClickService } from './click.service';
import { ClickController } from './click.controller';

@Module({
  controllers: [ClickController],
  providers: [ClickService],
})
export class ClickModule {}
