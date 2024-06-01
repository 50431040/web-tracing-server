import { Mixed } from 'mongoose';

export class BaseEvent {
  eventId: Mixed;
  /** 事件类型 */
  eventType: string;
  /** 上报时间 */
  sendTime: number;
  /** 触发地址 */
  triggerPageUrl: string;
  /** 触发时间 */
  triggerTime: number;
}
