import {CreateUserType} from "../types/users/input";
import {OutputUserType, UserType} from "../types/users/output";
import {UsersRepository} from "../repository/users-repository";
import bcrypt from "bcrypt";
import {UsersQueryRepository} from "../repository/users-query-repository";

export class UsersService{
    static async createUser(createUserData:CreateUserType){

        let userName = createUserData.login;
        if (createUserData.name) userName=createUserData.name;

        const hash = await bcrypt.hash(createUserData.password, 10);

        const newUser:UserType={
            name: userName,
            login: createUserData.login,
            email: createUserData.email,
            hash:hash,
            lists: []
        }
        const createdUserId = await UsersRepository.addNewUser(newUser);
        if (!createdUserId) return null;

        const createdUser:OutputUserType|null = await UsersQueryRepository.getUserById(createdUserId);
        if (!createdUser) return null;

        return createdUser;

    }
}
