import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function Vericarautenticacao (request: Request, response: Response, next: NextFunction){
    const authtoken = request.headers.authorization;
    const secretetoken = "f0eebe69-ac2f-4119-857f-92b18ca3086f";
    if(!authtoken){
        return response.json({
            message: "Está faltando o token"
        })
    }

    const [, token] = authtoken.split(" ");
    try {
       const login = verify(token, secretetoken)
       
        return next();
    } catch (err) {
        return response.json({
            message: "Token invalido!"
        })
    }

}