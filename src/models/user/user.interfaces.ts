export interface IUserModel extends Document {
    firstName: string
    lastName?: string
    username: string
    password: string
    refreshToken?: string
    lastToken?: Date
    createdAt: Date
    updatedAt: Date
    removed: boolean
}
export interface IUserBase extends IUserModel {
    fullName: string
}
export interface IUser extends IUserBase {}
export interface IUser_populated extends IUserBase {}
