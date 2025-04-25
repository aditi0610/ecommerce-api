import { User } from "src/users/entities/user.entity";
import { Column, Entity, Generated, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'order'})
export class Order {
    @Generated('increment')
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    orderDate: Date;

    @Column()
    status: string;    

    @ManyToOne(() => User, (user) => user.orders)
    user: User;
}
