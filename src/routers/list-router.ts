import express, {Request, Response} from "express";
import {CreateItemType} from "../types/items/input";
import {HTTP_STATUSES} from "../utils/common";
import {ItemsService} from "../domains/items-service";
import {authMiddleware} from "../middlewares/auth-middleware";
import {RequestWithBody} from "../types/common";
import {ListService} from "../domains/list-service";


export const listRouter = express.Router();

listRouter.get("/", (req: Request, res: Response) => {
    res.json({msg: "lists"})
})

listRouter.post("/", authMiddleware, async (req: RequestWithBody<any>, res: Response) => {

    const updatedUser = await ListService.createNewList(req.user.id, req.body.name);
    if (!updatedUser) {
        res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
        return;
    }
    res.status(HTTP_STATUSES.OK_200).json(updatedUser);
})

listRouter.post("/:id/lists", async (req: Request, res: Response) => {
    const listId = req.params.listId;
    const createData: CreateItemType = {
        name: req.body.name
    }

    const updatedList = await ItemsService.createNewItem(listId, createData);

    if (!updatedList) {
        res.status(HTTP_STATUSES.NOT_FOUND_404).json("list not found");
        return
    }
    res.sendStatus(HTTP_STATUSES.OK_200).json(updatedList);
})

