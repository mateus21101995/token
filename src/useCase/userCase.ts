import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


interface IUSerrequest{
    id: string
    nome: string
    email: string
    user: string
    senha: string
}


export class UserCase{

    //Registar um novo usuario
    async registar({nome, email, user, senha}: IUSerrequest){
        const createUser = await prisma.usuario.create({
            data: {
                nome,
                email,
                user,
                senha
            }
        }) 
        return createUser
    }

    async todosusuarios(){
        const usuario = await prisma.usuario.findMany()
        return usuario;
    }
}