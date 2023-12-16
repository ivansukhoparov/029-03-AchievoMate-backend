import {CreateListItemType, CreateListType} from "../types/lists/input";
import {listsCollection} from "../db/db-collections";
import {listRouter} from "../routers/list-router";
import {ListType} from "../types/lists/output";

export class ListsRepository {


    // GET SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    static async getListById(listId: string) {
        const list = await listsCollection.findOne({_id: new Object(listId)});
        return list;
    }

    // ADD SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

    static async createNewList(createData:ListType){
        try {
            const newListId = await listsCollection.insertOne(createData);
            return newListId.insertedId.toString()
        }catch (err){
            return null;
        }
    }

    // UPDATE SECTION ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    static async addNewItemToList(listId: string, itemData: CreateListItemType) {
        const result = await listsCollection.updateOne(
            {_id: new Object(listId)},
            {
                $push: {items: itemData}
            });
        return !!result.matchedCount;
    }


    //DELETE SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


}
