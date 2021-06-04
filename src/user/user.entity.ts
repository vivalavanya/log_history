import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Logs } from '../log/log.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Logs, (log) => log.user)
  logs: Logs[];

}