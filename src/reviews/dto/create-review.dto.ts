import { ApiProperty } from "@nestjs/swagger";
import { MinLength } from "class-validator";

export class CreateReviewDto {
    @ApiProperty() 
    id: number;

    @ApiProperty()
    rating: number;

    @ApiProperty()
    @MinLength(10)
    comment: string;
}
