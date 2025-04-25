import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, NotEquals } from "class-validator";

export class CreatePaymentDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ example: 'card', description: 'Payment method, e.g. card or paypal' })
    @IsString()
    @IsNotEmpty({ message: 'method should not be empty' })
    @NotEquals('string', { message: 'Please enter a valid method' })
    method: string;

    @ApiProperty({ example: 'pending', description: 'Payment status, e.g. pending, completed' })
    @IsString()
    @IsNotEmpty({ message: 'status should not be empty' })
    @NotEquals('string', { message: 'Please enter a valid status' })
    status: string;
}
