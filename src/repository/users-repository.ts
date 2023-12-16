import {UserType, UserTypeWithId} from "../types/users/output";
import {usersCollection} from "../db/db-collections";
import {userMapperWithHash} from "../types/users/mapper";
import {ObjectId} from "mongodb";


export class UsersRepository {


    // GET SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

    static async getUserById(userId: string): Promise<UserTypeWithId | null> {
    const user = await usersCollection.findOne({_id:new ObjectId(userId)});
    if (!user) return null
        return userMapperWithHash(user)
}

    static async getUserByLogin(userLogin:string){
        const user = await usersCollection.findOne({login:userLogin});
        if (!user) return null
        return userMapperWithHash(user)
    }

    static async getUserByEmail(userEmail:string){
        const user = await usersCollection.findOne({email:userEmail});
        if (!user) return null
        return userMapperWithHash(user)
    }


    static async getUserByLoginOrEmail(loginOrEmail: string) {
        try {
            const user = await usersCollection.findOne({
                $or: [
                    {login: loginOrEmail},
                    {email: loginOrEmail}
                ]
            });
            if (!user) return null;
            return userMapperWithHash(user);
        } catch (err) {
            return null;
        }
    }



    // ADD SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

    static async addNewUser(newUser:UserType){
        try{
            const result =  await usersCollection.insertOne(newUser);
            return result.insertedId.toString();
        }catch (err){
            return null
        }
    }


    // UPDATE SECTION ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||



    //DELETE SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

}
