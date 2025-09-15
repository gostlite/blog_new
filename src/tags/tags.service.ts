import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagEntity } from './tags.entity';
import { Repository } from 'typeorm';


@Injectable()
export class TagsService{
    constructor(@InjectRepository(TagEntity) private readonly tagsRepository:Repository<TagEntity> ){}
    async getTags(){
        const allTags = await this.tagsRepository.find()
        return {"tags": allTags.map(tag=>tag.name)}
    }
}