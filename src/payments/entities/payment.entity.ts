import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'payment'})
export class Payment {
    @Generated('increment')
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    method: string; // e.g. "card", "paypal"

    @Column()
    status: string;  
}
