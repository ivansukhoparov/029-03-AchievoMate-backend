import express, {Request, Response} from "express";


export const userRouter = express.Router();

userRouter.get("/",  (req:Request, res:Response)=>{
    res.json({msg:"users"})
})

