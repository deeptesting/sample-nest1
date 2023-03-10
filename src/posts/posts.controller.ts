import { Controller, Get, Param } from '@nestjs/common';

@Controller('posts')
export class PostsController {
    constructor() {}

    @Get()
    findAll(): string {
        return 'This action returns all posts';
    }

    @Get(":id")
    findOne(@Param('id') id: number): string {
        return 'This action returns one post of id ='+id;
    }
}
