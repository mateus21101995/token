import { Request, Response } from "express";
import { AutenticacaoUsuarioCase } from "./autendicacaousuario";




export class AutenticacaoController{
    async handle(request: Request, response: Response){
        const {user, senha} = request.body;
        const autenticacaousuario = new AutenticacaoUsuarioCase();

        const token = await autenticacaousuario.execute({
            user,
            senha
        })

        return response.status(200).json(token)
    }
}