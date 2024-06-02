import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

// 事件类型
export enum EventType {
  pv = 'pv',
  performance = 'performance',
  pvDuration = 'pv-duration',
  error = 'error',
  click = 'click',
  intersection = 'intersection',
}

export class EventInfoDto {
  eventId?: any;

  @IsNotEmpty()
  @IsEnum(EventType)
  eventType: string;

  @IsNotEmpty()
  @IsNumber()
  sendTime: number;

  @IsNotEmpty()
  @IsString()
  triggerPageUrl: string;

  // TODO 理论上不能为空
  // @IsNotEmpty()
  @IsOptional()
  @IsNumber()
  triggerTime?: number;

  /** click */

  @IsOptional()
  @IsString()
  elementPath?: string;

  @IsOptional()
  params?: any;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsNumber()
  x?: number;

  @IsOptional()
  @IsNumber()
  y?: number;

  /** error */

  @IsOptional()
  @IsString()
  errMessage?: string;

  @IsOptional()
  @IsString()
  col?: string;

  @IsOptional()
  @IsString()
  errStack?: string;

  @IsOptional()
  @IsString()
  line?: string;

  @IsOptional()
  @IsString()
  recordscreen?: string;

  /** intersection */
  @IsOptional()
  @IsNumber()
  observeTime?: number;

  @IsOptional()
  @IsNumber()
  showEndTime?: number;

  @IsOptional()
  @IsNumber()
  showTime?: number;

  @IsOptional()
  target?: any;

  @IsOptional()
  @IsNumber()
  threshold?: number;

  /** performance */
  @IsOptional()
  @IsNumber()
  dom?: number;

  @IsOptional()
  @IsNumber()
  firstbyte?: number;

  @IsOptional()
  @IsNumber()
  fmp?: number;

  @IsOptional()
  @IsNumber()
  loadon?: number;

  @IsOptional()
  @IsNumber()
  ready?: number;

  @IsOptional()
  @IsNumber()
  res?: number;

  @IsOptional()
  @IsNumber()
  ssllink?: number;

  @IsOptional()
  @IsNumber()
  trans?: number;

  @IsOptional()
  @IsNumber()
  ttfb?: number;

  @IsOptional()
  @IsNumber()
  tti?: number;

  @IsOptional()
  @IsNumber()
  connectEnd?: number;

  @IsOptional()
  @IsNumber()
  connectStart?: number;

  @IsOptional()
  @IsNumber()
  decodedBodySize?: number;

  @IsOptional()
  @IsNumber()
  domainLookupEnd?: number;

  @IsOptional()
  @IsNumber()
  domainLookupStart?: number;

  @IsOptional()
  @IsNumber()
  encodedBodySize?: number;

  @IsOptional()
  @IsNumber()
  fetchStart?: number;

  @IsOptional()
  @IsString()
  initiatorType?: string;

  @IsOptional()
  @IsNumber()
  requestStart?: number;

  @IsOptional()
  @IsNumber()
  responseEnd?: number;

  @IsOptional()
  @IsNumber()
  responseStart?: number;

  @IsOptional()
  @IsNumber()
  startTime?: number;

  @IsOptional()
  @IsNumber()
  transferSize?: number;

  @IsOptional()
  @IsString()
  requestUrl?: string;

  @IsOptional()
  @IsNumber()
  duration?: number;

  @IsOptional()
  @IsString()
  requestMethod?: string;

  @IsOptional()
  @IsString()
  requestType?: string;

  @IsOptional()
  @IsNumber()
  responseStatus?: number;

  /** pv */
  @IsOptional()
  @IsString()
  action?: string;

  @IsOptional()
  @IsString()
  referer?: string;

  /** pv-duration */
  @IsOptional()
  @IsNumber()
  durationTime?: number;
}
