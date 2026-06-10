import { IsDateString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSessaoDto {
  @ApiProperty()
  @IsDateString()
  dataHora!: string;

  @ApiProperty()
  @IsInt()
  filmeId!: number;

  @ApiProperty()
  @IsInt()
  salaId!: number;
}