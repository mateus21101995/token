import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

const prisma = new PrismaClient()

interface IRequest{
    email: string;
    password: string;
}


class AuthenticateUserCase{
    async handle({email, password}:IRequest){
        //Verificar se o email existe
        const emailexist = await prisma.user.findFirst({
            where:{
                email,
            }
        })

        if(!emailexist){
            throw new Error("Email ou password não coencidem!")
        }

        //vericar se a senha está correta
        const passwordMatch = await compare(password, emailexist.password);
        if(!passwordMatch){
            throw new Error("Email ou password não coencidem!")
        }

        //Gerar um token do usuario
        const token = sign({}, "f0eebe69-ac2f-4119-857f-92b18ca3086f",{
            subject: emailexist.id,
            expiresIn: "30s",
        })

        return {token}

    }
}

export {AuthenticateUserCase}