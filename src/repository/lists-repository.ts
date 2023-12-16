import {CreateListItemType, CreateListType} from "../types/lists/input";
import {listsCollection} from "../db/db-collections";
import {listRouter} from "../routers/list-router";
import {ListType} from "../types/lists/output";
import {listMapper} from "../types/lists/mapper";
import {ObjectId} from "mongodb";

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
       try {
            const list = await listsCollection.findOne({_id: new ObjectId(listId)});
            if (!list) return null;
            return listMapper(list);
        }catch (err){
           return null;
       }

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
            {_id: new ObjectId(listId)},
            {
                $push: {items: itemData}
            });
        return !!result.matchedCount;
    }


    //DELETE SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


}
