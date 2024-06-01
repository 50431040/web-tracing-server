import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from '../base/base.schema';
import { BaseEvent } from '../base/event.schema';
import { Mixed } from 'mongoose';

class ErrorEventInfo extends BaseEvent {
  errMessage: string;

  /** 代码报错 */
  col?: string;
  errStack?: string;
  line?: string;

  recordscreen?: string;

  /** 自定义错误 */
  params?: Mixed;
}

@Schema()
export class ErrorModel extends BaseSchema {
  @Prop()
  eventInfo: ErrorEventInfo;
}

export const ErrorSchema = SchemaFactory.createForClass(ErrorModel);
