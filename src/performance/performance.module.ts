import { Module } from '@nestjs/common';
import { PerformanceService } from './performance.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PerformanceModel, PerformanceSchema } from './performance.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PerformanceModel.name, schema: PerformanceSchema },
    ]),
  ],
  providers: [PerformanceService],
})
export class PerformanceModule {}
