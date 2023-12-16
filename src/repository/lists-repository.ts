import {CreateListItemType, CreateListType} from "../types/lists/input";
import {listsCollection} from "../db/db-collections";
import {listRouter} from "../routers/list-router";
import {ListType} from "../types/lists/output";
import {listMapper} from "../types/lists/mapper";

export class ListsRepository {


    // GET SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    static async getListsByUserId(userId:string){
        try {
            const lists = await listsCollection.find({userId:userId}).toArray()
            return lists.map(listMapper)
        }catch (err){
            return null
        }
    }
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
