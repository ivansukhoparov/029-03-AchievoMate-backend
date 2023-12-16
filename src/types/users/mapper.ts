import {OutputUserType, UserType, UserTypeWithId} from "./output";
import {WithId} from "mongodb";

export const userMapper = (user: WithId<UserType>): OutputUserType => {
    return {
        id: user._id.toString(),
        name: user.name,
        login: user.login,
        email: user.email,
        lists: user.lists
    }
}

export const userMapperWithHash = (user: WithId<UserType>): UserTypeWithId => {
    return {
        id: user._id.toString(),
        name: user.name,
        login: user.login,
        email: user.email,
        hash:user.hash,
        lists: user.lists
    }
}
