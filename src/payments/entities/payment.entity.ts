import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, Generated, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'payment'})
export class Payment {
    @Generated('increment')
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    method: string; // e.g. "card", "paypal"

    @Column()
    status: string;  

    @OneToOne(() => Order, order => order.payment)
    order: Order;
}
