import { LogItems } from 'src/log-item/log-item.entity';
import { Users } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Logs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  description: string;

  @Column({type:'datetime'})
  created: Date;

  @ManyToOne(() => Users, (user) => user.logs)
  @JoinColumn()
  user: Users;
  
  @OneToMany(() => LogItems, (item) => item.log, {
    cascade: ['insert', 'remove', 'update'],
    onDelete: 'CASCADE',
  })
  items: LogItems[];
}