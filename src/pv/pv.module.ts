import { Module } from '@nestjs/common';
import { PvService } from './pv.service';
import { PvController } from './pv.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PvModel, PvSchema } from './pv.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PvModel.name, schema: PvSchema }]),
  ],
  controllers: [PvController],
  providers: [PvService],
  exports: [PvService],
})
export class PvModule {}
