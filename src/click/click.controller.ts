import { Controller } from '@nestjs/common';
import { ClickService } from './click.service';

@Controller('click')
export class ClickController {
  constructor(private readonly clickService: ClickService) {}
}
