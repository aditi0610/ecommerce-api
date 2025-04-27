import { Cart } from "src/cart/entities/cart.entity";
import { Category } from "src/categories/entities/category.entity";
import { Review } from "src/reviews/entities/review.entity";
import { Column, Entity, Generated, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'product'})
export class Product {
    @Generated('increment')
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('text')
    description: string;

    @Column()
    price: number;

    @Column()
    stock: number;

    @ManyToOne(() => Category, (category) => category.products)
    category: Category;

    @OneToMany(() => Review, review => review.product)
    reviews: Review[];

    @OneToMany(() => Cart, cart => cart.product)
    cart: Cart[];

}
