import {IUser} from "../../models/user/user.interfaces";

declare global {
    namespace Express {
        interface Request {
            user?: IUser;
            files?: any[]
        }
    }
}