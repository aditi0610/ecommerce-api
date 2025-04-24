import { ApiProperty } from "@nestjs/swagger";
import { Max, Min, MinLength } from "class-validator";

export class CreateReviewDto {
    @ApiProperty() 
    id: number;

    @ApiProperty()
    @Min(1)
    @Max(5)
    rating: number;

    @ApiProperty()
    @MinLength(10)
    comment: string;
}
