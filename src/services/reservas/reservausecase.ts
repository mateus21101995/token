import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IReservaRequest{
    nome:   string;
    cartao: string;
    senha:  string;
    user:   string;
}

class Reservausecase{
    async handle({nome, cartao, senha, user}:IReservaRequest){

        const createReserva = await 
    }
}

export {Reservausecase}