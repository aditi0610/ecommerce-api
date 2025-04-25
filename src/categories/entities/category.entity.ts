import { Product } from "src/products/entities/product.entity";
import { Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'category'})
export class Category {
   @Generated('increment')
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;

   @OneToMany(() => Product, (product) => product.category)
   products: Product[];

}
