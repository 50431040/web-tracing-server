import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEventModel } from '../base/event.schema';
import { Mixed } from 'mongoose';

@Schema({
  collection: 'resource',
})
export class ResourceModel extends BaseEventModel {
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

  @Prop()
  requestUrl?: string;

  @Prop()
  duration?: number;

  @Prop()
  redirectStart?: number;

  @Prop()
  redirectEnd?: number;
}

export const PResourceSchema = SchemaFactory.createForClass(ResourceModel);
