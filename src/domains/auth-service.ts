import {UsersRepository} from "../repository/users-repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const secretKey = process.env.JWT_SECERET_KEY!

export class AuthService {
    static async loginUser(loginOrEmail: string, password: string) {
        const user = await UsersRepository.getUserByLoginOrEmail(loginOrEmail);
        if (!user) return null;
        const isCompare = await bcrypt.compare(password, user.hash);
        if (!isCompare) return null;

        const newToken =  jwt.sign({userId: user.id}, secretKey, {expiresIn: "1h"});
        return {
            accessToken:newToken
        }
    }

    static async getUserIdByToken(token:string){
        try{
            const result = jwt.verify(token,secretKey)
            if (typeof result !=="string"){
               return result.userId
            }
        }catch (err){
            return null
        }

    }

}
