import { Request, Response } from "express";
import { Usecaseuser } from "../services/usecaseruser";


class Usercontrollers{
    async execute(request: Request, response: Response){
        const {name, email, password} = request.body
        const usecaseser = new Usecaseuser()

        const create = await usecaseser.handle({
            name,
            email,
            password
        })

        return response.status(200).json(create)
    }
}

export {Usercontrollers}