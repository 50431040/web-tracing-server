import { Test, TestingModule } from '@nestjs/testing';
import { IntersectionService } from './intersection.service';

describe('IntersectionService', () => {
  let service: IntersectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntersectionService],
    }).compile();

    service = module.get<IntersectionService>(IntersectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
