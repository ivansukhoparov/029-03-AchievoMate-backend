import {NextFunction, Request, Response} from "express";
import {HTTP_STATUSES} from "../utils/common";
import {AuthService} from "../domains/auth-service";
import {UsersRepository} from "../repository/users-repository";
import {UsersQueryRepository} from "../repository/users-query-repository";

export const authMiddleware = async (req:Request,res:Response,next:NextFunction)=>{
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.sendStatus(HTTP_STATUSES.UNAUTHORIZED_401);
        return;
    }

    const token = authHeader.split(" ")[1];
    const authUserId = await AuthService.getUserIdByToken(token)
    if (!authUserId) {
        res.sendStatus(HTTP_STATUSES.UNAUTHORIZED_401);
        return;
    }

    const user = await UsersQueryRepository.getUserById(authUserId);
    if (!user) {
        res.sendStatus(HTTP_STATUSES.UNAUTHORIZED_401);
        return;
    }
    req.user = user;
    next();
}
