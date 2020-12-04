import UserRepository from "../../repositories/user.repository"
import IUserBusiness from "./iuser.business"
import {IUser} from "../../models/user/user.interfaces"

class UserBusiness implements IUserBusiness{

    private _userRepository : UserRepository;

    constructor() {
        this._userRepository = new UserRepository();
    }

    public create(record: IUser) {
        return this._userRepository.create(record);
    }

    createMany(records: IUser[]): Promise<IUser[]> {
        return this._userRepository.createMany(records);
    }
    find(id: string, populate?: any, select?: any) {
        return this._userRepository.find(id, populate, select);
    }
    findBy(condition: any, populate?: any, select?: any) {
        return this._userRepository.findBy(condition, populate, select);
    }
    list(condition: any = {}, limit: number = 100, skip: number = 0, populate?: any, sort?: any, select?: any) {
        return this._userRepository.list(condition, limit, skip, populate);
    }
    public count(condition: any = {}) {
        return this._userRepository.count(condition);
    }
    remove(id: string) {
        return this._userRepository.remove(id);
    }
    removeMany(condition: any) {
        return this._userRepository.removeMany(condition);
    }
    update(id: string, record: IUser) {
        return this._userRepository.update(id, record);
    }
    updateMany(condition: any, record: IUser) {
        return this._userRepository.updateMany(condition, record);
    }
}

Object.seal(UserBusiness);

export default UserBusiness;
