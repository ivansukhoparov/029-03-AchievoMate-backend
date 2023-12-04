import {WithId} from "mongodb";
import {ListType, OutputListType} from "./output";

export const listMapper= (input:WithId<ListType>):OutputListType=>{
    return {
        id: input._id.toString(),
        userId:input.userId,
        name:input.name,
        items: input.items
    }
}
