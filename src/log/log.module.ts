import { Module, Scope } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogItems } from 'src/log-item/log-item.entity';
import { Users } from 'src/user/user.entity';
import { LogController } from './log.controller';
import { Logs } from './log.entity';
import { LogService } from './log.service';

@Module({
  imports: [TypeOrmModule.forFeature([Logs, LogItems, Users])],
  controllers: [LogController],
  providers: [LogService]
})
export class LogModule {}
