import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEventModel } from '../base/event.schema';
import { Mixed } from 'mongoose';

@Schema({
  collection: 'click',
})
export class ClickModel extends BaseEventModel {
  @Prop()
  elementPath: string;

  @Prop({ type: Object })
  params?: Mixed;

  @Prop()
  title: string;

  @Prop()
  x: number;

  @Prop()
  y: number;
}

export const ClickSchema = SchemaFactory.createForClass(ClickModel);
