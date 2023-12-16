import express, {Request, Response} from "express";
import {CreateItemType} from "../types/items/input";
import {RequestWithBody} from "../types/common";
import {HTTP_STATUSES} from "../utils/common";
import {ItemsService} from "../domains/items-service";
import {authMiddleware} from "../middlewares/auth-middleware";
import {ItemsRepository} from "../repository/items-repository";


export const itemsRouter = express.Router();

itemsRouter.get("/", (req: Request, res: Response) => {
    res.json({msg: "this is item"})
})

itemsRouter.get("/:listId", authMiddleware, async (req: Request, res: Response) => {
    const items = await ItemsRepository.getAllItemsByListId(req.params.listId);
    if (!items) {
        res.sendStatus(HTTP_STATUSES.SEVER_ERROR_500);
        return;
    }
    res.status(HTTP_STATUSES.OK_200).json(items);
})


itemsRouter.post("/", authMiddleware, async (req: RequestWithBody<CreateItemType>, res: Response) => {
    const listId = req.body.listId;
    const createData: CreateItemType = {
        name: req.body.name,
        listId: req.body.listId
    }
    if (!listId) {
        res.status(HTTP_STATUSES.BAD_REQUEST_400).json("Bad request. Invalid List Id");
        return
    }
    const updatedList = await ItemsService.createNewItem(createData);

    if (!updatedList) {
        res.status(HTTP_STATUSES.NOT_FOUND_404).json("list not found");
        return
    }
    res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);
})

