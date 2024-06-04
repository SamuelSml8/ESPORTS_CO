import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePlayerDto } from '../dtos/create-player.dto';
import { UpdatePlayerDto } from '../dtos/update-player.dto';
import { ObjectResponse } from 'src/helpers/interfaces/res.interface';
import { Repository } from 'typeorm';
import { Player } from '../entities/player.entity';
import { res } from 'src/helpers/res';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  async create(player: CreatePlayerDto): Promise<ObjectResponse<Player>> {
    try {
      const savedPlayer = await this.playerRepository.save(player);
      return res(true, 'Player created successfully', savedPlayer);
    } catch (error) {
      console.error(error);
      return res(false, 'Error creating player', error);
    }
  }

  async getAllPlayers(): Promise<ObjectResponse<Player[]>> {
    try {
      const players = await this.playerRepository.find();
      return res(true, 'Players retrieved successfully', players);
    } catch (error) {
      console.error(error);
      return res(false, 'Error retrieving players', error);
    }
  }

  async getPlayerById(id: number): Promise<ObjectResponse<Player>> {
    try {
      const playerFound = await this.playerRepository.findBy({ id });
      if (!playerFound) {
        throw new HttpException(
          res(false, 'Player not found', null),
          HttpStatus.NOT_FOUND,
        );
      }

      return res(true, 'Player retrieved successfully', playerFound);
    } catch (error) {
      console.error(error);
      return res(false, 'Error retrieving player', error);
    }
  }

  async updatePlayer(
    id: number,
    updatePlayerDto: UpdatePlayerDto,
  ): Promise<ObjectResponse<Player>> {
    try {
      const player = await this.playerRepository.findOne({ where: { id } });
      if (!player) {
        throw new NotFoundException(
          res(false, `Player with ID ${id} not found`, null),
        );
      }
      const updatedPlayer = Object.assign(player, updatePlayerDto);
      await this.playerRepository.save(updatedPlayer);
      return res(true, 'Player updated successfully', updatedPlayer);
    } catch (error) {
      console.error('Error updating player:', error);
      throw error;
    }
  }
}
