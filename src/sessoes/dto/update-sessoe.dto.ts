import { PartialType } from '@nestjs/swagger';
import { CreateSessaoDto } from './create-sessoe.dto';

export class UpdateSessoeDto extends PartialType(CreateSessaoDto) {}
