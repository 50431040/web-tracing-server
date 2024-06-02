import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEventModel } from '../base/event.schema';
import { Mixed } from 'mongoose';

@Schema({
  collection: 'performance',
})
export class PerformanceModel extends BaseEventModel {
  /** 页面性能 */
  @Prop()
  dom?: number;

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
  trans?: number;

  @Prop()
  ttfb?: number;

  @Prop()
  tti?: number;

  /** 资源加载 */
  @Prop()
  connectEnd?: number;

  @Prop()
  connectStart?: number;

  @Prop()
  decodedBodySize?: number;

  @Prop()
  domainLookupEnd?: number;

  @Prop()
  domainLookupStart?: number;

  @Prop()
  encodedBodySize?: number;

  @Prop()
  fetchStart?: number;

  @Prop()
  initiatorType?: string;

  @Prop()
  requestStart?: number;

  @Prop()
  responseEnd?: number;

  @Prop()
  responseStart?: number;

  @Prop()
  startTime?: number;

  @Prop()
  transferSize?: number;

  /** 资源加载、接口请求共有 */
  @Prop()
  requestUrl?: string;

  @Prop()
  duration?: number;

  /** 接口请求 */
  @Prop({ type: Object })
  params?: Mixed;

  @Prop()
  requestMethod?: string;

  @Prop()
  requestType?: string;

  @Prop()
  responseStatus: number;

  @Prop()
  errMessage?: string;

  @Prop()
  recordscreen?: string;
}

export const PerformanceSchema = SchemaFactory.createForClass(PerformanceModel);
