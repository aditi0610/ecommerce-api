import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, NotEquals } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty() 
  id: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Name should not be empty' })
  @NotEquals('string', { message: 'Please enter a valid name' }) // avoid "string"
  name: string;
}
