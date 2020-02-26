import { IUserModel } from "../models/user/user.interfaces"
import UserSchema from "../models/user/user.schema"
import RepositoryBase from "./base/repository.base";

class UserRepository extends RepositoryBase<IUserModel>{
    constructor() {
        super(UserSchema)
    }
}

Object.seal(UserRepository)

export default UserRepository


