import { Test, TestingModule } from '@nestjs/testing';
import { ClickService } from './click.service';

describe('ClickService', () => {
  let service: ClickService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClickService],
    }).compile();

    service = module.get<ClickService>(ClickService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
