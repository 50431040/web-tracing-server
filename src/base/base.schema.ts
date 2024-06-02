import { Prop } from '@nestjs/mongoose';
import { Mixed } from 'mongoose';

class BaseInfo {
  @Prop()
  appCode: string;

  @Prop()
  appName: string;

  @Prop()
  clientHeight: number;

  @Prop()
  clientWidth: number;

  @Prop()
  colorDepth: number;

  @Prop()
  deviceId: string;

  @Prop({ type: Object })
  ext: Mixed;

  @Prop()
  pageId: string;

  @Prop()
  pixelDepth: number;

  @Prop()
  platform: string;

  @Prop()
  screenHeight: number;

  @Prop()
  screenWidth: number;

  @Prop()
  sdkUserUuid: string;

  @Prop()
  sdkVersion: string;

  @Prop()
  sendTime: number;

  @Prop()
  sessionId: string;

  @Prop()
  userUuid: string;

  @Prop()
  vendor: string;
}

export class BaseSchema {
  @Prop()
  baseInfo: BaseInfo;
}
