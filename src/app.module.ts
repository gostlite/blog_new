import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagsModule } from './tags/tags.modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm_config';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(config),TagsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
