import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from '../base/base.schema';
import { BaseEvent } from '../base/event.schema';
import { Mixed } from 'mongoose';

class IntersectionEventInfo extends BaseEvent {
  observeTime: number;
  params?: Mixed;
  showEndTime: number;
  showTime: number;
  target?: Mixed;
  threshold: number;
}

@Schema({
  collection: 'intersection',
})
export class IntersectionModel extends BaseSchema {
  @Prop()
  eventInfo: IntersectionEventInfo;
}

export const IntersectionSchema =
  SchemaFactory.createForClass(IntersectionModel);
