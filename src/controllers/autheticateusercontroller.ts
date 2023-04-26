import { Request, Response } from "express";
import { AuthenticateUserCase } from "../services/auth/authuser";


class Authenticateusercontrollers{
    async execute(request: Request, response: Response){
        const {email, password} = request.body;

        const authenticateusercase = new AuthenticateUserCase();

        const token = await authenticateusercase.handle({
            email,
            password
        });

        return response.json(token)

    }
}

export {Authenticateusercontrollers}