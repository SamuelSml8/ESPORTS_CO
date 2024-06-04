import { Player } from 'src/players/entities/player.entity';
import { Result } from 'src/results/entities/result.entity';
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity('tournaments')
export class Tournament {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 150 })
  description: string;

  @OneToMany(() => Result, (result) => result.tournament)
  @JoinTable()
  players?: Player[];

  @DeleteDateColumn()
  deletedAt?: Date;
}
