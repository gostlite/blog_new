import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./create_user.dto";


@Controller("user")
export class UserControler{
    constructor(private readonly userService:UserService){}
    @Post()
    createUser(@Body("user") createUserDto:CreateUserDto){
        return this.userService.createUser(createUserDto)
    }
}