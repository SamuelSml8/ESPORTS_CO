import { Tournament } from 'src/tournament/entities/tournament.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('players')
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'varchar', length: 50 })
  country: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  team: string;

  @ManyToMany(() => Tournament, (tournament) => tournament.players)
  @JoinTable()
  tournaments: Tournament[];
}
