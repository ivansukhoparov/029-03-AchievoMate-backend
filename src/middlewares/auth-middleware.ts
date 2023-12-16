import {NextFunction, Request, Response} from "express";
import {HTTP_STATUSES} from "../utils/common";
import {AuthService} from "../domains/auth-service";
import {UsersQueryRepository} from "../repository/users-query-repository";
import {ListsRepository} from "../repository/lists-repository";

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

export const accessRightMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const list = await ListsRepository.getListById(req.params.id);
    console.log(req.params.id)
    console.log(req.user.id)
    console.log(list)
    if (!list) {
        res.sendStatus(HTTP_STATUSES.UNAUTHORIZED_401);
        return;
    }
    if (list.userId !== req.user.id) {
        res.sendStatus(HTTP_STATUSES.UNAUTHORIZED_401);
        return;
    }
    next();
}
