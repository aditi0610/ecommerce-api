import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePaymentDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ example: 'card', description: 'Payment method, e.g. card or paypal' })
    @IsString()
    method: string;

    @ApiProperty({ example: 'pending', description: 'Payment status, e.g. pending, completed' })
    @IsString()
    status: string;
}
