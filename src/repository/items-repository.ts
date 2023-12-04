import {CreateItemType} from "../types/items/input";
import {ItemType} from "../types/items/output";
import {itemsCollection} from "../db/db-collections";

export class ItemsRepository {


    // GET SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


    // ADD SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    static async addNewItem(newItem: ItemType) {
        const result = await itemsCollection.insertOne(newItem);
        return result.insertedId.toString();
    }

    // UPDATE SECTION ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


    //DELETE SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


}
