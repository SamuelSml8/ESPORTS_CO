import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TournamentService } from '../services/tournament.service';
import { CreateTournamentDto } from '../dtos/create-tournament.dto';
import { UpdateTournamentDto } from '../dtos/update-tournament.dto';

@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Post('create')
  async create(@Body() tournament: CreateTournamentDto) {
    return this.tournamentService.create(tournament);
  }

  @Put('update/:id')
  async update(
    @Param('id') id: number,
    @Body() updateTournamentDto: UpdateTournamentDto,
  ) {
    return this.tournamentService.update(id, updateTournamentDto);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number) {
    return this.tournamentService.delete(id);
  }

  @Post('add-player/:playerId/:tournamentId')
  async addPlayer(
    @Param('playerId') playerId: number,
    @Param('tournamentId') tournamentId: number,
  ) {
    return this.tournamentService.addPlayerToTournament(playerId, tournamentId);
  }

  @Get('all')
  async getAllTournamentsWithPlayers() {
    return this.tournamentService.getAllTournamentsWithPlayers();
  }
}
