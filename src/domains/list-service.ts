import {ListType} from "../types/lists/output";
import {CreateListType} from "../types/lists/input";
import {UpdateUserListType} from "../types/users/input";
import {ListsRepository} from "../repository/lists-repository";
import {UsersRepository} from "../repository/users-repository";
import {UsersQueryRepository} from "../repository/users-query-repository";

export class ListService {

    static async createNewList(userId:string, listName:string) {

        const newList: ListType = {
            userId: userId,
            name: listName,
            items: []
        }

        const newListId = await ListsRepository.createNewList(newList);
        if (!newListId) return null;

        const newListToUserList:UpdateUserListType={
            listId: newListId,
            listName: listName
        }
        const isUserUpdated = await UsersRepository.addNewListToUser(userId, newListToUserList)
        if (!isUserUpdated) return null;

        return await UsersQueryRepository.getUserById(userId);

    }
}
