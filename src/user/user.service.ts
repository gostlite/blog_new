import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./create_user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserService{
    constructor(@InjectRepository(UserEntity) private readonly userRepository:Repository<UserEntity>){}
    async createUser(createUserDto: CreateUserDto){
        const newUser = new UserEntity()
        Object.assign(newUser,createUserDto)
        await this.userRepository.save(newUser)
        return createUserDto
    }
}