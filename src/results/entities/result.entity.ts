import { Player } from 'src/players/entities/player.entity';
import { Tournament } from 'src/tournament/entities/tournament.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('results')
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Player, (player) => player.id)
  player: Player;

  @ManyToOne(() => Tournament, (tournament) => tournament.players)
  tournament: Tournament;

  @Column({ type: 'int' })
  winnerScore: number;

  @Column({ type: 'int' })
  loserScore: number;
}
