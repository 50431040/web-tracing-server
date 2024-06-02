import { Module } from '@nestjs/common';
import { PvDurationService } from './pv-duration.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PvDurationModel, PvDurationSchema } from './pv-duration.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PvDurationModel.name, schema: PvDurationSchema },
    ]),
  ],
  providers: [PvDurationService],
})
export class PvDurationModule {}
