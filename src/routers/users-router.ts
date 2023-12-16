import express, {Request, Response} from "express";
import {RequestWithBody} from "../types/common";
import {CreateUserType} from "../types/users/input";
import {UsersService} from "../domains/users-service";
import {HTTP_STATUSES} from "../utils/common";
import {UsersQueryRepository} from "../repository/users-query-repository";


export const usersRouter = express.Router();

usersRouter.get("/", async (req: Request, res: Response) => {
    const users = await UsersQueryRepository.getAllUsers();
    if (!users) {
        res.sendStatus(500);
        return
    }
    res.status(HTTP_STATUSES.OK_200).json(users);
})

usersRouter.post("/", async (req:RequestWithBody<CreateUserType>, res:Response)=>{
    const newUser = await UsersService.createUser(req.body);
    if (!newUser) res.status(HTTP_STATUSES.BAD_REQUEST_400);
    else res.status(HTTP_STATUSES.CREATED_201).json(newUser);
})
