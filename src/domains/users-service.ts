import {CreateUserType} from "../types/users/input";
import {OutputUserType, UserType} from "../types/users/output";
import {UsersRepository} from "../repository/users-repository";
import bcrypt from "bcrypt"
import {UsersQueryRepository} from "../repository/users-query-repository";

export class UsersService{
    static async createUser(createUserData:CreateUserType){

        const isExist = await UsersRepository.getUserByLoginOrEmail(createUserData.login,createUserData.email)
        if (isExist) return new Error("Login is already exist")

        let userName = createUserData.login;
        if (createUserData.name) userName=createUserData.name

        const hash = await bcrypt.hash(createUserData.password, 10);

        const newUser:UserType={
            name: userName,
            login: createUserData.login,
            email: createUserData.email,
            hash:hash,
            deleted:false,
            lists: []
        }

        const createdUserId = await UsersRepository.addNewUser(newUser);
        const createdUser:OutputUserType|null = await UsersQueryRepository.getUserById(createdUserId);

        if (!createdUser) return null

        return createdUser

    }
}
