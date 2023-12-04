import express, {Request, Response} from "express";
import {RequestWithBody} from "../types/common";
import {CreateUserType} from "../types/users/input";


export const usersRouter = express.Router();

usersRouter.get("/",  (req:Request, res:Response)=>{
    res.json({msg:"users"})
})

usersRouter.post("/", async (req:RequestWithBody<CreateUserType>, res:Response)=>{

})
