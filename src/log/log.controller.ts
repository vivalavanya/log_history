import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/user.decorator';
import { CreateLogDto } from './dto/create-log.dto';
import { Logs } from './log.entity';
import { LogService } from './log.service';

@Controller('api/log')
export class LogController {
    constructor(private readonly logService: LogService) {}

    @Post('/add')
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body() createLogDto: CreateLogDto,
        @User() user,
    ): Promise<Logs | { error: string }> {
        return this.logService.create({
            username: user.username,
            password: user.password,
            ...createLogDto,
        });
    }

    @Get('/get')
    getAll(
        @Param() param:any,
        @User() user,
    ): Promise<Logs[] | { error: string }> {
        return this.logService.getAll(user.username, user.password, param.skip, param.take);
    }
    @Get('/get/one')
    getOne(
        @Body() body:any,
        @User() user,
    ): Promise<Logs[] | { error: string }> {
        console.log(body.url)
        return this.logService.getOne(user.username, user.password, body.url);
    }
}


