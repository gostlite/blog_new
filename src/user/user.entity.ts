import { BeforeUpdate,BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt'

@Entity("users")
export class UserEntity{
    @PrimaryGeneratedColumn("increment")
    id:number
    @Column({unique:true})
    username:string
    @Column({default:""})
    jwtToken:string
    @Column({default:""})
    bio:string
    @Column({default:""})
    image:string
    @Column({unique:true})
    email:string
    @Column()
    password:string;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
        if(this.password){
            const salt = await bcrypt.genSalt(10)
            this.password = await bcrypt.hash(this.password,salt)
   
        }
    }
}