import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from '../base/base.schema';
import { BaseEvent } from '../base/event.schema';
import { Mixed } from 'mongoose';

class ClickEventInfo extends BaseEvent {
  elementPath: string;
  params?: Mixed;
  title: string;
  x: number;
  y: number;
}

@Schema({
  collection: 'click',
})
export class ClickModel extends BaseSchema {
  @Prop()
  eventInfo: ClickEventInfo;
}

export const ClickSchema = SchemaFactory.createForClass(ClickModel);
