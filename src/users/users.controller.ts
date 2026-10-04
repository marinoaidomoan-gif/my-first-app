import { Controller, Get, Post, Delete, Param, Body, Patch } from '@nestjs/common';
import { UsersService } from './users.service.js';

@Controller('users')
export class UsersController {
    constructor (private readonly usersService: UsersService){}

    @Get()
    findAll(){
        return this.usersService.findAll();
    }

    //GET /users/:id
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.usersService.findAll();
    }

    //POST /users
    @Post()
    create(@Body() body: {name: string}) {
        return this.usersService.create(body);
    }

    //PATCH /users/:id
    @Patch(':id')
    update(@Param('id') id: string, @Body() body: {name?: string}){
        return this.usersService.update(Number(id), body);
    }

    //DELETE /users/:id
    @Delete(':id')
    delete(@Param('id') id: string){
        return this.usersService.delete(Number(id))
    }
}
