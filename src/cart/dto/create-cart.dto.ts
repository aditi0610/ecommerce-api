import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNumber, Min } from "class-validator";

export class CreateCartDto {
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    @IsNumber()
    productId: number;
    
    @ApiProperty()
    @IsInt()
    @Min(1)
    quantity: number;
}
