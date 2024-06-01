import { Controller } from '@nestjs/common';
import { PvDurationService } from './pv-duration.service';

@Controller('pv-duration')
export class PvDurationController {
  constructor(private readonly pvDurationService: PvDurationService) {}
}
