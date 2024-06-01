import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from '../base/base.schema';
import { BaseEvent } from '../base/event.schema';

export class PvEventInfo extends BaseEvent {
  /** 触发动作 */
  action: string;
  referer: string;
  title: string;
}

@Schema()
export class PvModel extends BaseSchema {
  @Prop()
  eventInfo: PvEventInfo;
}

export const PvSchema = SchemaFactory.createForClass(PvModel);
