import { Module } from '@nestjs/common';
import { PvDurationService } from './pv-duration.service';
import { PvDurationController } from './pv-duration.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PvDurationModel, PvDurationSchema } from './pv-duration.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PvDurationModel.name, schema: PvDurationSchema },
    ]),
  ],
  controllers: [PvDurationController],
  providers: [PvDurationService],
})
export class PvDurationModule {}
