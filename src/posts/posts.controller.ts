import { Controller, Get, Param } from '@nestjs/common';

@Controller('posts')
export class PostsController {
    constructor() {}

    @Get("")
    findAll() {
        return {
            data: 'This action returns all posts test'
        };
    }

    @Get(":id")
    findOne(@Param('id') id: number) {
        return {
            data: 'This action returns one post of id ='+id
        }
    }
}
