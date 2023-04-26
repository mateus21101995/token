import { Request, Response, Router } from "express";
import { Usercontrollers } from "../controllers/usercontrollers";
import { Authenticateusercontrollers } from "../controllers/autheticateusercontroller";
import { Vericarautenticacao } from "../middlewares/vericarouter";
const router = Router()

router.get("/", (request: Request, response: Response)=>{
    response.json("Mateus")
})


const usercontrollers = new Usercontrollers()
const authenticateusercontrollers = new Authenticateusercontrollers()

router.post("/user", usercontrollers.execute)
router.post("/login",authenticateusercontrollers.execute)

//Vericar o token se é valido
router.get("/token",Vericarautenticacao, (request: Request, response: Response)=>{
    response.json([
        {País: "Angola", Capital: "Luanda"},
        {País: "Angola", Capital: "Luanda"},
        {País: "Angola", Capital: "Luanda"}
    ])
})

export{router}