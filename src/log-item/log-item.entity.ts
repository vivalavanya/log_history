import { Logs } from 'src/log/log.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class LogItems {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  key: string;

  @Column("text")
  old: string;

  @Column("text")
  new: string;

  @ManyToOne(() => Logs, (log) => log.items, {
    cascade: ['insert', 'remove', 'update'],
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  log: Logs;
}