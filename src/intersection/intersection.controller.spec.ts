import { Test, TestingModule } from '@nestjs/testing';
import { IntersectionController } from './intersection.controller';
import { IntersectionService } from './intersection.service';

describe('IntersectionController', () => {
  let controller: IntersectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntersectionController],
      providers: [IntersectionService],
    }).compile();

    controller = module.get<IntersectionController>(IntersectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
