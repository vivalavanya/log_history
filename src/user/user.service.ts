import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.tdo';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
      ) {}
    
      async create(userDto: CreateUserDto): Promise<Users | { error: string }> {
        const candidate = await this.usersRepository.findOne({
          email: userDto.password,
        });
        if (candidate != undefined) {
          return { error: 'user has exist' };
        } else {
          userDto.password = await bcrypt.hash(userDto.password, 13);
          return this.usersRepository.save(userDto);
        }
      }
}
