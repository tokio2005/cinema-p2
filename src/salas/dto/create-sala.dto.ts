import { IsInt, Min } from 'class-validator';

export class CreateSalaDto {
  @IsInt()
  @Min(1)
  numero!: number;

  @IsInt()
  @Min(1)
  capacidade!: number;
}