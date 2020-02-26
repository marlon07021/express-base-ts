import UserRepository from "../repositories/user.repository"
import IUserBusiness from "./iuser.business"
import { IUserModel } from "../models/user/user.interfaces"

class UserBusiness implements IUserBusiness{

    private _userRepository : UserRepository

    constructor() {
        this._userRepository = new UserRepository()
    }
    create(record: IUserModel) {
        return this._userRepository.create(record)
    }
    find(id: string) {
        return this._userRepository.find(id)
    };
    list(condition: any, limit: number, skip: number, populate: any, sort?: any, select?: any) {
        return this._userRepository.list(condition, limit, skip, populate)
    }
    count(condition: any = {}) {
        return this._userRepository.count(condition)
    }
    remove(id: string) {
        return this._userRepository.remove(id)
    }
    removeMany(condition: any) {
        return this._userRepository.removeMany(condition)
    }
    update(id: string, record: IUserModel) {
        return this._userRepository.update(id, record)
    }
    updateMany(condition: any, record: IUserModel) {
        return this._userRepository.updateMany(condition, record)
    }
}

Object.seal(UserBusiness)

export default UserBusiness
