import cors from "cors";
import Express from "express";
import { router } from "./routes/routes";


const app = Express();


app.use(cors())
app.use(Express.json())
app.use(router)


app.listen(3333,()=>{
    console.log("Servidor rodando na porta 3333")
})