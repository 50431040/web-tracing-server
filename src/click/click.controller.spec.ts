import { Test, TestingModule } from '@nestjs/testing';
import { ClickController } from './click.controller';
import { ClickService } from './click.service';

describe('ClickController', () => {
  let controller: ClickController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClickController],
      providers: [ClickService],
    }).compile();

    controller = module.get<ClickController>(ClickController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
