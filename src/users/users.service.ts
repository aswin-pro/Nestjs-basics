import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id" : 1,
            "name" : "Aswin",
            "email" : "aswin@gmail.com",
            "role" : "INTERN"
        },
        {
            "id" : 2,
            "name" : "Dev",
            "email" : "dev@gmail.com",
            "role" : "ADMIN"
        },
        {
            "id" : 3,
            "name" : "Wilspet",
            "email" : "wilspet@gmail.com",
            "role" : "ENGINEER"
        },
        {
            "id" : 4,
            "name" : "Jhon",
            "email" : "jhon@gmail.com",
            "role" : "INTERN"
        },
        {
            "id" : 5,
            "name" : "Broto",
            "email" : "broto@gmail.com",
            "role" : "ENGINEER"
        },
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if(role) {
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    findOne(id : number) {
        const user = this.users.find(user => user.id === id)

        return user
    }

    create(user : { name : string, email:string, role:'INTERN' | 'ENGINEER' | 'ADMIN' }){
       
        const newUser = {
            id: this.users.length+1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number,updatedUser: { name? : string, email?:string, role?:'INTERN' | 'ENGINEER' | 'ADMIN' }){
        this.users = this.users.map(user => {
            if(user.id === id){
                return { ...user, ...updatedUser}
            }
            return user
        })

        return this.findOne(id)
    }

    delete(id: number){
        const removeUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)

        return removeUser
    }
}

