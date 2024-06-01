import { Test, TestingModule } from '@nestjs/testing';
import { PvDurationService } from './pv-duration.service';

describe('PvDurationService', () => {
  let service: PvDurationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PvDurationService],
    }).compile();

    service = module.get<PvDurationService>(PvDurationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
