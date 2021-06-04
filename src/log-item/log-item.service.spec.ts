import { Test, TestingModule } from '@nestjs/testing';
import { LogItemService } from './log-item.service';

describe('LogItemService', () => {
  let service: LogItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogItemService],
    }).compile();

    service = module.get<LogItemService>(LogItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
