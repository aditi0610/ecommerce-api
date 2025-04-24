import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty() 
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
