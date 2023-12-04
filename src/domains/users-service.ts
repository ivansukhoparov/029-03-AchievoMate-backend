import {CreateUserType} from "../types/users/input";
import {OutputUserType, UserType} from "../types/users/output";
import {UsersRepository} from "../repository/users-repository";


class UsersService{
    static async createUser(createData:CreateUserType){

        const isExist = await UsersRepository.getUserByLogin(createData.login)
        if (isExist) return new Error("Login is already exist")

        let userName = createData.login;
        if (createData.name) userName=createData.name

        const newUser:UserType={
            name: userName,
            login: createData.login,
            password: createData.password,
            email: createData.email,
            lists: []
        }

        const createdUserId = await UsersRepository.addNewUser(newUser);
        const createdUser:OutputUserType|null = await UsersRepository.getUserById(createdUserId);

        if (!createdUser) return null

        return createdUser

    }
}
