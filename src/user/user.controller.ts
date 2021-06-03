import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Users } from 'src/user.entity';
import { CreateUserDto } from './dto/create-user.tdo';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Post('/add')
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body() createUserDto: CreateUserDto,
    ): Promise<Users | { error: string }> {
        return this.userService.create(createUserDto);
  }
}
