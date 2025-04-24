import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'cart'})
export class Cart {
    @Generated('increment')
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    quantity: number;

}
