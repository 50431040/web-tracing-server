import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from '../base/base.schema';
import { PvEventInfo } from '../pv/pv.schema';

export class PvDurationEventInfo extends PvEventInfo {
  durationTime: number;
}

@Schema({
  collection: 'pv-duration',
})
export class PvDurationModel extends BaseSchema {
  @Prop()
  eventInfo: PvDurationEventInfo;
}

export const PvDurationSchema = SchemaFactory.createForClass(PvDurationModel);
