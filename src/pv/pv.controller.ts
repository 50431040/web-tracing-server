import { Controller } from '@nestjs/common';
import { PvService } from './pv.service';

@Controller('pv')
export class PvController {
  constructor(private readonly pvService: PvService) {}
}
