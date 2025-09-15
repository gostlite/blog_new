import { Module } from "@nestjs/common";
import { UserControler } from "./user.controller";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
    controllers: [UserControler],
    providers: [UserService],
    imports: [TypeOrmModule.forFeature([UserEntity])],
   
})
export class UserModule{}
