import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEventModel } from '../base/event.schema';
import { Mixed } from 'mongoose';

@Schema({
  collection: 'error',
})
export class ErrorModel extends BaseEventModel {
  @Prop()
  errMessage: string;

  /** 代码报错 */
  @Prop()
  col?: string;

  @Prop()
  errStack?: string;

  @Prop()
  line?: string;

  @Prop()
  recordscreen?: string;

  /** 自定义错误 */
  @Prop({ type: Object })
  params?: Mixed;
}

export const ErrorSchema = SchemaFactory.createForClass(ErrorModel);
