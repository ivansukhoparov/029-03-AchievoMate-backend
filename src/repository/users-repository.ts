import {UserType, UserTypeWithId} from "../types/users/output";
import {usersCollection} from "../db/db-collections";
import {userMapperWithHash} from "../types/users/mapper";


export class UsersRepository {


    // GET SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

    static async getUserById(userId: string): Promise<UserTypeWithId | null> {
    const user = await usersCollection.findOne({_id:new Object(userId)});
    if (!user) return null
        return userMapperWithHash(user)
}

    static async getUserByLogin(userLogin:string){
        const user = await usersCollection.findOne({login:userLogin});
        if (!user) return null
        return userMapperWithHash(user)
    }

    static async getUserByLoginOrEmail(login: string, email: string) {
        try {
            const user = await usersCollection.findOne({
                $or: [
                    {login: login},
                    {email: email}
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
    const result =  await usersCollection.insertOne(newUser);
    return result.insertedId.toString();
}


    // UPDATE SECTION ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||



    //DELETE SECTION |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

}
