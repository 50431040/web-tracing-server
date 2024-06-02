import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEventModel } from '../base/event.schema';
@Schema({
  collection: 'pv-duration',
})
export class PvDurationModel extends BaseEventModel {
  /** 触发动作 */
  @Prop()
  action: string;

  @Prop()
  referer: string;

  @Prop()
  title: string;

  @Prop()
  durationTime: number;
}

export const PvDurationSchema = SchemaFactory.createForClass(PvDurationModel);
