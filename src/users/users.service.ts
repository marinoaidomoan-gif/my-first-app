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

    findOne(id: number){
        return this.users.find(u => u.id === id)
    }

    create(data: {name: string}) {
        const newUser = {
            id: this.users.length +1,
            ...data,
        };
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, data: {name?: string}){
        const user = this.findOne(id);
        if (!user) return null;

        Object.assign(user,data);
        return user;
    }

    delete(id: number){
        this.users = this.users.filter(u => u.id !== id);
        return { deleted: true };
    }
}
