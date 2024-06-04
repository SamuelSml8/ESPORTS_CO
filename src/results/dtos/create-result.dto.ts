import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateResultDto {
  @IsNotEmpty({ message: 'El ID del jugador no puede estar vacío' })
  @IsInt({ message: 'El ID del jugador debe ser un número entero' })
  playerId: number;

  @IsNotEmpty({ message: 'El ID del torneo no puede estar vacío' })
  @IsInt({ message: 'El ID del torneo debe ser un número entero' })
  tournamentId: number;

  @IsNotEmpty({ message: 'La puntuación del ganador no puede estar vacía' })
  @IsInt({ message: 'La puntuación del ganador debe ser un número entero' })
  @Min(0, { message: 'La puntuación del ganador debe ser mayor o igual a 0' })
  winnerScore: number;

  @IsNotEmpty({ message: 'La puntuación del perdedor no puede estar vacía' })
  @IsInt({ message: 'La puntuación del perdedor debe ser un número entero' })
  @Min(0, { message: 'La puntuación del perdedor debe ser mayor o igual a 0' })
  loserScore: number;
}
