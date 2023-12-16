import express, {Request, Response} from "express";
import {CreateItemType} from "../types/items/input";
import {HTTP_STATUSES} from "../utils/common";
import {ItemsService} from "../domains/items-service";
import {authMiddleware} from "../middlewares/auth-middleware";
import {RequestWithBody} from "../types/common";
import {ListService} from "../domains/list-service";
import {ListsRepository} from "../repository/lists-repository";


export const listRouter = express.Router();

// GET request - return lists array for authorized user
listRouter.get("/",authMiddleware, async (req: Request, res: Response) => {
    const lists = await ListsRepository.getListsByUserId(req.user.id);
    if (!lists){
    res.sendStatus(HTTP_STATUSES.SEVER_ERROR_500);
    return;
    }
    res.status(HTTP_STATUSES.OK_200).json(lists);
})

// POST request - create new list for authored user
listRouter.post("/", authMiddleware, async (req: RequestWithBody<any>, res: Response) => {

    const updatedUser = await ListService.createNewList(req.user.id, req.body.name);
    if (!updatedUser) {
        res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
        return;
    }
    res.status(HTTP_STATUSES.OK_200).json(updatedUser);
})

// POST request - add new item to list by list id
listRouter.post("/:id/items", authMiddleware, async (req:RequestWithBody<any>, res:Response)=>{

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

