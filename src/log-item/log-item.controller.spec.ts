import { Test, TestingModule } from '@nestjs/testing';
import { LogItemController } from './log-item.controller';

describe('LogItemController', () => {
  let controller: LogItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogItemController],
    }).compile();

    controller = module.get<LogItemController>(LogItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
