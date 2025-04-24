import { ApiProperty } from "@nestjs/swagger";
import { IsInt, Min } from "class-validator";

export class CreateCartDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    @IsInt()
    @Min(1)
    quantity: number;
}
