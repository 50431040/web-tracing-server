import { Module } from '@nestjs/common';
import { ErrorService } from './error.service';
import { ErrorController } from './error.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ErrorModel, ErrorSchema } from './error.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ErrorModel.name, schema: ErrorSchema }]),
  ],
  controllers: [ErrorController],
  providers: [ErrorService],
})
export class ErrorModule {}
