import {IUser, IUserModel} from './user.interfaces';

class UserModel {

    private _userModel: IUser;

    constructor(userModel: IUser) {
        this._userModel = userModel
    }

    checkPassword(plainPassword: string) {
        return this._userModel.checkPassword(plainPassword);
    }

    get id (): string {
        return this._userModel.id
    }

    get firstName (): string {
        return this._userModel.firstName
    }
    get lastName (): string {
        return this._userModel.lastName
    }
    get username (): string {
        return this._userModel.username
    }
    get password (): string {
        return this._userModel.password
    }
    get role (): string {
        return this._userModel.role
    }
    get refreshToken (): string {
        return this._userModel.refreshToken
    }
    get lastToken (): Date {
        return this._userModel.lastToken
    }
    get createdAt (): Date {
        return this._userModel.createdAt
    }
    get updatedAt (): Date {
        return this._userModel.updatedAt
    }
    removed (): boolean {
        return this._userModel.removed
    }
}

Object.seal(UserModel);

export default UserModel

