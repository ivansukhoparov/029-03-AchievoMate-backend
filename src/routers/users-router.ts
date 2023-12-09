import express, {Request, Response} from "express";
import {RequestWithBody} from "../types/common";
import {CreateUserType} from "../types/users/input";
import {UserType} from "../types/users/output";
import {UsersService} from "../domains/users-service";
import {HTTP_STATUSES} from "../utils/common";


export const usersRouter = express.Router();

usersRouter.get("/",  (req:Request, res:Response)=>{
    res.json({msg:"users"})
})

usersRouter.post("/", async (req:RequestWithBody<CreateUserType>, res:Response)=>{

    const newUser = await UsersService.createUser(req.body)
    if (!newUser) res.status(HTTP_STATUSES.BAD_REQUEST_400)
    else  res.status(HTTP_STATUSES.CREATED_201).json(newUser)
})
