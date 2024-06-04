import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Mixed } from 'mongoose';

@Schema({
  collection: 'base-info',
})
export class BaseInfoModel {
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

  @Prop({ default: Date.now() })
  _createTime: number;
}

export const BaseInfoSchema = SchemaFactory.createForClass(BaseInfoModel);
