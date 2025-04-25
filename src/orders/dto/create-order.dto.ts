    import { IsString, IsOptional } from 'class-validator';    import { ApiProperty } from '@nestjs/swagger';
    
    export class CreateOrderDto {
      @ApiProperty()
      id: number;
      
      @ApiProperty({ example: 'pending', description: 'Status of the order' })
      @IsString()
      @IsOptional() // Optional if you're setting a default status in the service
      status: string;
    }
    

