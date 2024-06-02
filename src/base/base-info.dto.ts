import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class BaseInfoDto {
  @IsString()
  appCode: string;

  @IsOptional()
  @IsString()
  appName?: string;

  @IsOptional()
  @IsNumber()
  clientHeight?: number;

  @IsOptional()
  @IsNumber()
  clientWidth?: number;

  @IsOptional()
  @IsNumber()
  colorDepth?: number;

  @IsOptional()
  @IsString()
  deviceId?: string;

  @IsOptional()
  ext?: any;

  @IsOptional()
  @IsString()
  pageId?: string;

  @IsOptional()
  @IsNumber()
  pixelDepth?: number;

  @IsOptional()
  @IsString()
  platform?: string;

  @IsOptional()
  @IsNumber()
  screenHeight?: number;

  @IsOptional()
  @IsNumber()
  screenWidth?: number;

  @IsOptional()
  @IsString()
  sdkUserUuid?: string;

  @IsString()
  sdkVersion: string;

  @IsNotEmpty()
  @IsNumber()
  sendTime: number;

  @IsOptional()
  @IsString()
  sessionId?: string;

  @IsOptional()
  @IsString()
  userUuid?: string;

  @IsOptional()
  @IsString()
  vendor?: string;
}
