import { Payment } from "src/payments/entities/payment.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, Generated, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'order'})
export class Order {
    @Generated('increment')
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.orders)
    user: User;
    
    @OneToOne(() => Payment, { cascade: true })
    @JoinColumn()
    payment: Payment;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    orderDate: Date;

    @Column()
    status: string;    

   
}
