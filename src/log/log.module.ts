import { Module, Scope } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/user.entity';
import { LogController } from './log.controller';
import { Logs } from './log.entity';
import { LogService } from './log.service';

@Module({
  imports: [TypeOrmModule.forFeature([Logs, Users])],
  controllers: [LogController],
  providers: [LogService]
})
export class LogModule {}
