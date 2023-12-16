import {WithId} from "mongodb";
import {ItemType, OutputItemType} from "./output";

export const itemsMapper = (input: WithId<ItemType>): OutputItemType => {
    return {
        id: input._id.toString(),
        listId: input.listId,
        name: input.name,
        status: input.status,
        dates: input.dates
    }
}
