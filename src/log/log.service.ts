import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from "moment-timezone";
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateLogDto } from './dto/create-log.dto';
import { Logs } from './log.entity';
import { Users } from 'src/user/user.entity';
import { LogItems } from 'src/log-item/log-item.entity';

@Injectable()
export class LogService {
    save(createLogDto: CreateLogDto) {
        throw new Error('Method not implemented.');
      }
    constructor(
        @InjectRepository(Logs)
        private logsRepository: Repository<Logs>,
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
        @InjectRepository(LogItems)
        private logItemsRepository: Repository<LogItems>,
    ) {}

    async create( createLogDto: CreateLogDto): Promise<Logs | { error: any }> {
        const created = moment().tz(process.env.TZ).format("YYYY-MM-DD HH:mm:ss");

        const user = await this.userValidate(createLogDto.username, createLogDto.password);
        return this.logsRepository.save({
            ...createLogDto,
            user,
            created
        });
    }

    async getAll(username, password, skip = 0, take = 100): Promise<Logs[]> {
        const user = await this.userValidate(username, password);
        return this.logsRepository.find(
            {
                order: {
                    id: "ASC",
                },
                skip,
                take
            }
        );
    }

    async getOne(username, password, url): Promise<Logs[]> {
        const user = await this.userValidate(username, password);
        return this.logsRepository.find({url});
    }

    async userValidate(username:string, password:string): Promise<Users>{
        const user = await this.userRepository.findOne({email: username}); 

        if (!user) {
            throw new NotFoundException();
        }
        if (!password) {
            throw new Error('Password is reqired!');
        }
        const compare = await bcrypt.compare(
            password,
            user.password,
        );
    
        if (!compare) {
            throw new NotFoundException();
        }

        return user;
    }


}
