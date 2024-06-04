import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tournament } from '../entities/tournament.entity';
import { Repository } from 'typeorm';
import { ObjectResponse } from 'src/helpers/interfaces/res.interface';
import { res } from 'src/helpers/res';
import { CreateTournamentDto } from '../dtos/create-tournament.dto';
import { UpdateTournamentDto } from '../dtos/update-tournament.dto';
import { Player } from 'src/players/entities/player.entity';
import { PlayersService } from 'src/players/services/players.service';

@Injectable()
export class TournamentService {
  constructor(
    @InjectRepository(Tournament)
    private readonly tournamentRepository: Repository<Tournament>,
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  async create(
    tournament: CreateTournamentDto,
  ): Promise<ObjectResponse<Tournament>> {
    try {
      const savedTournament = await this.tournamentRepository.save(tournament);
      return res(true, 'Tournament created successfully', savedTournament);
    } catch (error) {
      console.error(error);
      return res(false, 'Error creating tournament', error);
    }
  }

  async update(
    id: number,
    updateTournamentDto: UpdateTournamentDto,
  ): Promise<ObjectResponse<Tournament>> {
    const tournament = await this.tournamentRepository.findOne({
      where: { id },
    });
    if (!tournament) {
      throw new NotFoundException(
        res(false, `Player with ID ${id} not found`, null),
      );
    }

    const updatedTournament = Object.assign(tournament, updateTournamentDto);
    await this.tournamentRepository.save(updatedTournament);
    return res(true, 'Tournament updated successfully', updateTournamentDto);
  }

  async delete(id: number): Promise<ObjectResponse<Tournament | null>> {
    try {
      const tournamentFound = await this.tournamentRepository.findOne({
        where: { id },
      });

      if (!tournamentFound) {
        throw new NotFoundException(
          res(false, `Tournament with ID ${id} not found`, null),
        );
      }

      tournamentFound.deletedAt = new Date();
      await this.tournamentRepository.save(tournamentFound);
      return res(true, 'Tournament deleted successfully', tournamentFound);
    } catch (error) {
      console.error(error);
      return res(false, 'Error deleting tournament', error);
    }
  }

  async addPlayerToTournament(
    playerId: number,
    tournamentId: number,
  ): Promise<ObjectResponse<Tournament>> {
    try {
      const tournament = await this.tournamentRepository.findOne({
        where: { id: tournamentId },
        relations: ['players'],
      });

      if (!tournament) {
        throw new NotFoundException(
          res(false, `Tournament with ID ${tournamentId} not found`, null),
        );
      }

      const player = await this.playerRepository.findOne({ where: {id: playerId} });

      if (!player) {
        throw new NotFoundException(
          res(false, `Player with ID ${playerId} not found`, null),
        );
      }

      if (!tournament.players.some((p) => p.id === player.id)) {
        tournament.players.push(player);
        await this.tournamentRepository.save(tournament);
        return res(true, 'Player added to tournament successfully', tournament);
      } else {
        throw new ConflictException(
          res(
            false,
            `Player with ID ${player.id} is already in the tournament`,
            null,
          ),
        );
      }
    } catch (error) {
      console.error('Error adding player to tournament:', error);
      throw error;
    }
  }

  async getAllTournamentsWithPlayers(
    page: number = 1,
    limit: number = 10,
  ): Promise<ObjectResponse<Tournament[]>> {
    try {
      const [tournaments, total] = await this.tournamentRepository.findAndCount(
        {
          relations: ['players'],
          skip: (page - 1) * limit,
          take: limit,
        },
      );

      if (!tournaments.length) {
        throw new NotFoundException(res(false, 'No tournaments found', null));
      }

      return res(true, 'Tournaments retrieved successfully', {
        tournaments,
        total,
      });
    } catch (error) {
      console.error('Error retrieving tournaments:', error);
      throw error;
    }
  }
}
