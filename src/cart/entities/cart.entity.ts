import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, Generated, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'cart'})
export class Cart {
    @Generated('increment')
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    quantity: number;

    @ManyToOne(() => User, (user) => user.cart)
    user: User;

    @ManyToOne(() => Product)
    product: Product;
}
