import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'review'})
export class Review {
    @Generated('increment')
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;

    @Column()
    comment: string;
}
