import {OutputUserType, UserType} from "./output";
import {WithId} from "mongodb";

export const userMapper = (user: WithId<UserType>): OutputUserType => {
    return {
        id: user._id.toString(),
        name: user.name,
        login: user.login,
        password: user.password,
        email: user.email,
        lists: user.lists
    }
}
