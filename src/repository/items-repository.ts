import {CreateItemType} from "../types/items/input";
import {ItemType} from "../types/items/output";
import {itemsCollection} from "../db/db-collections";
import {itemsRouter} from "../routers/items-router";
import {itemsMapper} from "../types/items/mapper";

export class ItemsRepository {


    // GET SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    static async getAllItemsByListId(listId:string){
        try {
            const items = await itemsCollection.find({listId:listId}).toArray();
            return items.map(itemsMapper);
        }catch (err){
            return null;
        }
    }

    // ADD SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    static async addNewItem(newItem: ItemType) {
        const result = await itemsCollection.insertOne(newItem);
        return result.insertedId.toString();
    }

    // UPDATE SECTION ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


    //DELETE SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


}
