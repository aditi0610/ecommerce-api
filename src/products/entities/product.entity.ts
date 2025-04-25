import { Category } from "src/categories/entities/category.entity";
import { Column, Entity, Generated, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'product'})
export class Product {
    @Generated('increment')
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    stock: number;

    @ManyToOne(() => Category, (category) => category.products)
    category: Category;

    
}
