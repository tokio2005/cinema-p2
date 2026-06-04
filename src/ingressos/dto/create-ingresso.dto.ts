import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreateIngressoDto {
  @IsString()
  tipo!: string;

  @IsNumber()
  valor!: number;

  @IsInt()
  sessaoId!: number;
}
