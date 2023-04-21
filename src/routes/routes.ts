import Route, { Request, Response } from "express";
import { UserControllers } from "../controllers/usercontrollers";
import { AutenticacaoController } from "../service/auth/autenticacaocontrollers";
import { VericarAutenticação } from "../middlewares/vericarautenticacao";


const router = Route();

router.get("/", function (request: Request, response: Response){
    response.status(200).json("Api-Turismo")
})

//route do usuario
const autenticacaocontroller = new AutenticacaoController()
const userControllers = new UserControllers();
router.post("/usuario", userControllers.cadastrar)
router.get("/usuario", VericarAutenticação, userControllers.mostrarusurio)
router.post("/login", autenticacaocontroller.handle)
router.get("/provincia", VericarAutenticação, (request: Request, response: Response)=>{
    response.json([
        {Id: "1", Província: "Luanda"},
        {Id: "2", Província: "Lubango"}
    ])
})

export {router}