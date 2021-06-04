import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logs } from 'src/log/log.entity';
import { LogItemController } from './log-item.controller';
import { LogItems } from './log-item.entity';
import { LogItemService } from './log-item.service';

@Module({
  imports: [TypeOrmModule.forFeature([Logs, LogItems])],
  controllers: [LogItemController],
  providers: [LogItemService]
})
export class LogItemModule {}
