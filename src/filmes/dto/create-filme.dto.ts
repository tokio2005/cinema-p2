import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFilmeDto {
  @ApiProperty()
  @IsString()
    @IsNotEmpty()
      titulo!: string;

        @ApiProperty()
        @IsString()
          @IsNotEmpty()
            sinopse!: string;

               @ApiProperty()
              @IsString()
                @IsNotEmpty()
                  genero!: string;

                    @ApiProperty()
                    @IsInt()
                      @Min(1)
                        duracao!: number;

                          @ApiProperty()
                          @IsString()
                            @IsNotEmpty()
                              classificacao!: string;
                              }