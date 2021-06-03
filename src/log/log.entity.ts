import { Users } from 'src/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';

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
}