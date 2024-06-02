import { Module } from '@nestjs/common';
import { ClickService } from './click.service';
import { ClickController } from './click.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClickModel, ClickSchema } from './click.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ClickModel.name, schema: ClickSchema }]),
  ],
  controllers: [ClickController],
  providers: [ClickService],
})
export class ClickModule {}
