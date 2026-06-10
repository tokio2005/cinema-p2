import { IsInt, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateIngressoDto {
  @ApiProperty()
  @IsString()
  tipo!: string;

  @ApiProperty()
  @IsNumber()
  valor!: number;

  @ApiProperty()
  @IsInt()
  sessaoId!: number;
}
