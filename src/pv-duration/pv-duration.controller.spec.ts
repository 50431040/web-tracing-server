import { Test, TestingModule } from '@nestjs/testing';
import { PvDurationController } from './pv-duration.controller';
import { PvDurationService } from './pv-duration.service';

describe('PvDurationController', () => {
  let controller: PvDurationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PvDurationController],
      providers: [PvDurationService],
    }).compile();

    controller = module.get<PvDurationController>(PvDurationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
