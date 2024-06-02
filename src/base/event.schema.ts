import { Prop } from '@nestjs/mongoose';
import { Mixed } from 'mongoose';

export class BaseEventModel {
  @Prop({ type: Object })
  eventId: Mixed;
  /** 事件类型 */

  @Prop()
  eventType: string;

  @Prop()
  /** 上报时间 */
  sendTime: number;

  @Prop()
  /** 触发地址 */
  triggerPageUrl: string;

  @Prop()
  /** 触发时间 */
  triggerTime: number;
}
