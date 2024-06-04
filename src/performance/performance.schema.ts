import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEventModel } from '../base/event.schema';
import { Mixed } from 'mongoose';

@Schema({
  collection: 'performance',
})
export class PerformanceModel extends BaseEventModel {
  @Prop()
  appcache?: number;

  @Prop()
  dom?: number;

  @Prop()
  dns?: number;

  @Prop()
  firstbyte?: number;

  @Prop()
  fmp?: number;

  @Prop()
  loadon?: number;

  @Prop()
  ready?: number;

  @Prop()
  res?: number;

  @Prop()
  ssllink?: number;

  @Prop()
  tcp?: number;

  @Prop()
  trans?: number;

  @Prop()
  ttfb?: number;

  @Prop()
  tti?: number;

  @Prop()
  redirect?: number;

  @Prop()
  unloadTime?: number;
}

export const PerformanceSchema = SchemaFactory.createForClass(PerformanceModel);
