import {IUser} from "../models/user/user.interfaces"
import UserModel from "../models/user/user.model"
import RepositoryBase from "./base/repository.base";

class UserRepository extends RepositoryBase<IUser>{
    constructor() {
        super(UserModel)
    }
}

Object.seal(UserRepository);

export default UserRepository
