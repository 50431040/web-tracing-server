import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PvModel } from './pv.schema';
import { EventInfoDto } from '../base/event-info.dto';

@Injectable()
export class PvService {
  constructor(@InjectModel(PvModel.name) private pvModel: Model<PvModel>) {}

  async handle(eventInfo: EventInfoDto) {
    await this.pvModel.create(eventInfo);
  }
}
