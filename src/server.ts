import "express-async-errors"
import cors from "cors"
import Express, { NextFunction, Request, Response } from "express";
import { router } from "./routes/routes";

const app = Express();

app.use(Express.json())
app.use(cors())
app.use(router)
app.use((error: Error, request: Request, response: Response, next: NextFunction)=>{
    return response.json({
        status: "Error",
        message: error.message,
    })
})

app.listen(2222, ()=>{
    console.log("Server in runing in port 2222")
})