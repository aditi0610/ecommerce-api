import { User } from "src/users/entities/user.entity";
import { Column, Entity, Generated, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'review'})
export class Review {
    @Generated('increment')
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;

    @Column()
    comment: string;

    @ManyToOne(() => User, (user) => user.reviews)
    user: User;
}
