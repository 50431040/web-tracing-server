import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from '../base/base.schema';
import { BaseEvent } from '../base/event.schema';
import { Mixed } from 'mongoose';

class PerformanceEventInfo extends BaseEvent {
  /** 页面性能 */
  dom?: number;
  firstbyte?: number;
  fmp?: number;
  loadon?: number;
  ready?: number;
  res?: number;
  ssllink?: number;
  trans?: number;
  ttfb?: number;
  tti?: number;

  /** 资源加载 */
  connectEnd?: number;
  connectStart?: number;
  decodedBodySize?: number;
  domainLookupEnd?: number;
  domainLookupStart?: number;
  encodedBodySize?: number;
  fetchStart?: number;
  initiatorType?: string;
  requestStart?: number;
  responseEnd?: number;
  responseStart?: number;
  startTime?: number;
  transferSize?: number;

  /** 资源加载、接口请求共有 */
  requestUrl?: string;
  duration?: number;

  /** 接口请求 */
  params?: Mixed;
  requestMethod?: string;
  requestType?: string;
  responseStatus: number;
  errMessage?: string;
  recordscreen?: string;
}

@Schema()
export class PerformanceModel extends BaseSchema {
  @Prop()
  eventInfo: PerformanceEventInfo;
}

export const PerformanceSchema = SchemaFactory.createForClass(PerformanceModel);
