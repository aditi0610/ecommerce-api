import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'user'})
export class User {
    @Generated('increment')
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ default: 'user' })
    role: string; // can be 'user' or 'admin'
}
