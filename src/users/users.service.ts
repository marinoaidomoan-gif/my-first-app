import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {id:1 , name:"Nabo Clément"},
        {id:2 , name:"Didi Conspi"}
    ];

    findAll(){
        return this.users;
    }
}
