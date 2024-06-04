import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PlayersService } from '../services/players.service';
import { CreatePlayerDto } from '../dtos/create-player.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playerService: PlayersService) {}

  @Post('create')
  async createPlayer(@Body() player: CreatePlayerDto) {
    return await this.playerService.create(player);
  }

  @Put('update/:id')
  async updatePlayer(@Param('id') id: number, @Body() player: CreatePlayerDto) {
    return await this.playerService.updatePlayer(id, player);
  }

  @Get('all')
  async getAllPlayers() {
    return await this.playerService.getAllPlayers();
  }

  @Get(':id')
  async getPlayerById(@Param('id') id: number) {
    return await this.playerService.getPlayerById(id);
  }
}
