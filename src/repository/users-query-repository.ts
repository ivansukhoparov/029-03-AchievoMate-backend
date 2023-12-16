import {OutputUserType} from "../types/users/output";
import {usersCollection} from "../db/db-collections";
import {userMapper} from "../types/users/mapper";
import {ObjectId} from "mongodb";

export class UsersQueryRepository{
    static async getAllUsers(){
        try{
            const users = await usersCollection.find({}).toArray();
            return users.map(userMapper);
        }catch (err){
            return null;
        }


    }
    static async getUserById(userId:string):Promise<OutputUserType|null>{
        try{
            const user = await usersCollection.findOne({_id:new ObjectId(userId)});
            if (!user) return null
            return userMapper(user)
        }catch (err){
            return null;
        }
    }
}
