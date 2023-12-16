import {CreateItemType} from "../types/items/input";
import {ItemType} from "../types/items/output";
import {ItemsRepository} from "../repository/items-repository";
import {CreateListItemType} from "../types/lists/input";
import {ListsRepository} from "../repository/lists-repository";
import {listMapper} from "../types/lists/mapper";


export class ItemsService {
    static async createNewItem(createData: CreateItemType) {

        // create object with new item
        const newItem: ItemType = {
            name: createData.name,
            listId:createData.listId,
            status: "ACTIVE",
            dates: []
        }
        // add new item to DB and get id of new item
        const newItemId = await ItemsRepository.addNewItem(newItem);

        // create object that push to list.items
        const updateListData: CreateListItemType = {
            itemId: newItemId.toString(),
            itemName: createData.name,
            itemStatus: "ACTIVE"
        }

        // push new object to list.items array, and return false if update is wrong
        const isUpdated = await ListsRepository.addNewItemToList(createData.listId, updateListData)
        if (!isUpdated) return null

        // get updated list, return false if operation is wrong and mapped updated list if success
        const updatedList = await ListsRepository.getListById(createData.listId);
        if (!updatedList) return null
        return updatedList;
    }
}
