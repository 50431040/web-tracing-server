import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEventModel } from '../base/event.schema';

@Schema({
  collection: 'pv',
})
export class PvModel extends BaseEventModel {
  /** 触发动作 */
  @Prop()
  action: string;

  @Prop()
  referer: string;

  @Prop()
  title: string;
}

export const PvSchema = SchemaFactory.createForClass(PvModel);
