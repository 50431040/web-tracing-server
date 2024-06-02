import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEventModel } from '../base/event.schema';
import { Mixed } from 'mongoose';

@Schema({
  collection: 'intersection',
})
export class IntersectionModel extends BaseEventModel {
  @Prop()
  observeTime: number;

  @Prop({ type: Object })
  params?: Mixed;

  @Prop()
  showEndTime: number;

  @Prop()
  showTime: number;

  @Prop({ type: Object })
  target?: Mixed;

  @Prop()
  threshold: number;
}

export const IntersectionSchema =
  SchemaFactory.createForClass(IntersectionModel);
