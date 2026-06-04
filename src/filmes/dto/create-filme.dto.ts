import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateFilmeDto {
  @IsString()
  @IsNotEmpty()
  titulo!: string;

  @IsString()
  @IsNotEmpty()
  sinopse!: string;

  @IsString()
  @IsNotEmpty()
  genero!: string;

  @IsInt()
  @Min(1)
  duracao!: number;

  @IsString()
  @IsNotEmpty()
  classificacao!: string;
}