import {UserType} from "../types/users/output";
import {usersRouter} from "../routers/users-router";
import {usersCollection} from "../db/db-collections";
import {userMapper} from "../types/users/mapper";


export class UsersRepository {


    // GET SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

static async getUserById(userId:string){
    const user = await usersCollection.findOne({_id:new Object(userId)});
    if (!user) return null
    return userMapper(user)
}

    static async getUserByLogin(userLogin:string){
        const user = await usersCollection.findOne({login:userLogin});
        if (!user) return null
        return userMapper(user)
    }

    // ADD SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

static async addNewUser(newUser:UserType){
    const result =  await usersCollection.insertOne(newUser);
    return result.insertedId.toString();
}


    // UPDATE SECTION ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||



    //DELETE SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

}
