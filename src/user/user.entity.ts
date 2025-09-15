import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class UserEntity{
    @PrimaryGeneratedColumn("increment")
    id:number
    @Column()
    username:string
    @Column()
    jwtToken:string
    @Column()
    bio:string
    @Column()
    image:string
    @Column({unique:true})
    email:string
    @Column()
    password:string
}