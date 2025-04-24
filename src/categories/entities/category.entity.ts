import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'category'})
export class Category {
   @Generated('increment')
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;

}
