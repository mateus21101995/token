import { Request, Response } from "express";
import { UserCase } from "../useCase/userCase";


export class UserControllers{
    async cadastrar(request: Request, response: Response){
        
        const {id, nome, email, user, senha} = request.body
        const userCase = new UserCase();

        const salvar = await userCase.registar({
            id,
            nome,
            email,
            user,
            senha,
        })

        response.status(200).json(salvar)
    }

   

    async mostrarusurio(request: Request, response: Response){
        
        const userCase = new UserCase();

        const mostrar = await userCase.todosusuarios()

        response.status(200).json(mostrar)
    }

}