import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEventModel } from '../base/event.schema';
import { Mixed } from 'mongoose';

@Schema({
  collection: 'network',
})
export class NetworkModel extends BaseEventModel {
  @Prop()
  requestUrl?: string;

  @Prop()
  requestMethod?: string;

  @Prop()
  requestType?: string;

  @Prop()
  responseStatus: number;

  @Prop()
  duration?: number;

  @Prop({ type: Object })
  params?: Mixed;

  @Prop()
  errMessage?: string;

  @Prop()
  recordscreen?: string;
}

export const NetworkSchema = SchemaFactory.createForClass(NetworkModel);
