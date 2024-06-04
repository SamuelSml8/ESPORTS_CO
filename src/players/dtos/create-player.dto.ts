import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class CreatePlayerDto {
  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @MaxLength(50, { message: 'El nombre no puede tener más de 50 caracteres' })
  name: string;

  @IsNotEmpty({ message: 'La edad no puede estar vacía' })
  @IsInt({ message: 'La edad debe ser un número entero' })
  @Min(16, { message: 'La edad mínima permitida es 16' })
  age: number;

  @IsNotEmpty({ message: 'El país no puede estar vacío' })
  @IsString({ message: 'El país debe ser una cadena de texto' })
  @MaxLength(50, { message: 'El país no puede tener más de 50 caracteres' })
  country: string;

  @IsString({ message: 'El equipo debe ser una cadena de texto' })
  @MaxLength(50, { message: 'El equipo no puede tener más de 50 caracteres' })
  team: string;
}
