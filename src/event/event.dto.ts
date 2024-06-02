import { Type } from 'class-transformer';
import { BaseInfoDto } from '../base/base-info.dto';
import { EventInfoDto } from '../base/event-info.dto';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmptyObject,
  ValidateNested,
} from 'class-validator';

export class EventDto {
  @IsNotEmptyObject()
  @Type(() => BaseInfoDto)
  baseInfo: BaseInfoDto;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => EventInfoDto)
  eventInfo: EventInfoDto[];
}
