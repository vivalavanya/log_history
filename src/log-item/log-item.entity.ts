import { Logs } from 'src/log/log.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class LogItems {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  key: string;

  @Column()
  old: string;

  @Column()
  new: string;

  @ManyToOne(() => Logs, (log) => log.items)
  @JoinColumn()
  log: Logs;
}