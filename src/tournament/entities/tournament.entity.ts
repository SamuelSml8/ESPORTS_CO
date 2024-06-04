import { Player } from 'src/players/entities/player.entity';
import { Result } from 'src/results/entities/result.entity';
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn, DeleteDateColumn, ManyToMany } from 'typeorm';

@Entity('tournaments')
export class Tournament {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 150 })
  description: string;

  @ManyToMany(() => Player, (player) => player.tournaments)
  @JoinTable()
  players?: Player[];

  @DeleteDateColumn()
  deletedAt?: Date;
}
