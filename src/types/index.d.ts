import {OutputUserType, UserOutputType, UserType} from "./users/output";

declare global {
    namespace Express {
        export interface Request {
            user: OutputUserType
        }
    }
}
