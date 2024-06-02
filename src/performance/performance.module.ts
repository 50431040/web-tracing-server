import { Module } from '@nestjs/common';
import { PerformanceService } from './performance.service';
import { PerformanceController } from './performance.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PerformanceModel, PerformanceSchema } from './performance.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PerformanceModel.name, schema: PerformanceSchema },
    ]),
  ],
  controllers: [PerformanceController],
  providers: [PerformanceService],
})
export class PerformanceModule {}
