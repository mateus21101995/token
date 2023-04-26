import {hash} from "bcryptjs"

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

interface IUserRequest{
    name: string;
    email: string;
    password: string;
}

class Usecaseuser{
    async handle({name, email, password}:IUserRequest){

        const userexists = await prisma.user.findUnique({
            where:{
                email,
            }
        })

        if(userexists){
            throw new Error("O email já existe")
        }

        const passwordHash = await hash(password, 8);
        const createuser = await prisma.user.create({
            data:{
                name,
                email,
                password: passwordHash
            }
        })

        return {createuser}

    }
}

export {Usecaseuser}