import { ApiProperty } from "@nestjs/swagger";

export class CreateCartDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    quantity: number;
}
