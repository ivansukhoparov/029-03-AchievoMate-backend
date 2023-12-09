import {OutputUserType} from "../types/users/output";
import {usersCollection} from "../db/db-collections";
import {userMapper} from "../types/users/mapper";

export class UsersQueryRepository{
    static async getUserById(userId:string):Promise<OutputUserType|null>{
        const user = await usersCollection.findOne({_id:new Object(userId)});
        if (!user) return null
        return userMapper(user)
    }
}
