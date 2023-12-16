import express, {Request, Response} from "express";
import {RequestWithBody} from "../types/common";
import {AuthInputType} from "../types/auth/input";
import {AuthService} from "../domains/auth-service";
import {authToken} from "../types/auth/output";
import {HTTP_STATUSES} from "../utils/common";
import {authMiddleware} from "../middlewares/auth-middleware";

export const authRouter = express.Router();

authRouter.post ("/login", async (req:RequestWithBody<AuthInputType>,res:Response)=>{
    const accessToken:authToken|null = await AuthService.loginUser(req.body.loginOrEmail, req.body.password)
    if (!accessToken) {
        res.sendStatus(HTTP_STATUSES.UNAUTHORIZED_401);
        return;
    }
    res.status(HTTP_STATUSES.OK_200).json(accessToken);
})

