import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { LogModule } from './log/log.module';
import { LogItemModule } from './log-item/log-item.module';



@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, LogModule, LogItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
