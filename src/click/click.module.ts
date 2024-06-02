import { Module } from '@nestjs/common';
import { ClickService } from './click.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClickModel, ClickSchema } from './click.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ClickModel.name, schema: ClickSchema }]),
  ],
  providers: [ClickService],
})
export class ClickModule {}
