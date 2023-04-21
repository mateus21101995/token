import { PrismaClient } from "@prisma/client";
import { sign } from "jsonwebtoken";


const prisma = new PrismaClient();


interface IUserRequest{
    user: string;
    senha: string;
}


export class AutenticacaoUsuarioCase{
    async execute({user, senha}:IUserRequest){
        //Verificar se usuario existe
        const usuarioExiste = await prisma.usuario.findUnique({
            where:{
                user
            }
        });

        if(!usuarioExiste){
            return console.log("Usuario ou senha está incorrecta")
        }

        //Verficar se a senha existe
        const senhaExiste = await prisma.usuario.findMany({
            where: {
                senha
            }
        });

        if (!senhaExiste){
            return console.log("Usuario ou senha está incorrecta")
        }

        //Gerar Token do usuario
        const token = sign({}, "64348efc-bbc2-43ee-91bd-54919047226c", {
            subject: usuarioExiste.id,
            expiresIn: "26s",
            
        })

        return {token}
        
    }
}