import { IsDateString, IsInt } from 'class-validator';

export class CreateSessaoDto {
  @IsDateString()
  dataHora!: string;

  @IsInt()
  filmeId!: number;

  @IsInt()
  salaId!: number;
}