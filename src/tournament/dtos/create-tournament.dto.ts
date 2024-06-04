import {
  IsNotEmpty,
  IsString,
  MaxLength,
  ArrayNotEmpty,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreatePlayerDto } from 'src/players/dtos/create-player.dto';

export class CreateTournamentDto {
  @IsNotEmpty({ message: 'El nombre del torneo no puede estar vacío' })
  @IsString({ message: 'El nombre del torneo debe ser una cadena de texto' })
  @MaxLength(50, {
    message: 'El nombre del torneo no puede tener más de 50 caracteres',
  })
  name: string;

  @IsNotEmpty({ message: 'La descripción del torneo no puede estar vacía' })
  @IsString({
    message: 'La descripción del torneo debe ser una cadena de texto',
  })
  @MaxLength(150, {
    message: 'La descripción del torneo no puede tener más de 150 caracteres',
  })
  description: string;

  @ArrayNotEmpty({ message: 'La lista de jugadores no puede estar vacía' })
  @ValidateNested({ each: true })
  @Type(() => CreatePlayerDto)
  players: CreatePlayerDto[];
}
