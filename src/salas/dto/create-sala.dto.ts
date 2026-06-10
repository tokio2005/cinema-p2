import { IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSalaDto {
  @ApiProperty()
  @IsInt()
  @Min(1)
  numero!: number;

  @ApiProperty()
  @IsInt()
  @Min(1)
  capacidade!: number;
}