import {CreateListItemType} from "../types/lists/input";
import {listsCollection} from "../db/db-collections";

export class ListsRepository {


    // GET SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    static async getListById(listId: string) {
        const list = await listsCollection.findOne({_id: new Object(listId)});
        return list;
    }

    // ADD SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


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
