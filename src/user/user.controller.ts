import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create_user.dto";


@Controller("user")
export class UserControler{
    constructor(private readonly userService:UserService){}
    @Post()
    async createUser(@Body("user") createUserDto:CreateUserDto):Promise<CreateUserDto>{
        return await this.userService.createUser(createUserDto)
    }
}