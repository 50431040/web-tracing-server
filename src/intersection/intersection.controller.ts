import { Controller } from '@nestjs/common';
import { IntersectionService } from './intersection.service';

@Controller('intersection')
export class IntersectionController {
  constructor(private readonly intersectionService: IntersectionService) {}
}
