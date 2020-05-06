import { Document, Types } from 'mongoose'

export interface IUserModel extends Document {
    firstName: string;
    lastName?: string;
    username: string;
    password: string;
    role: string;
    refreshToken?: string;
    lastToken?: Date;
    createdAt: Date;
    updatedAt: Date;
    removed: boolean;
}

interface IUserBase extends IUserModel {
    id: string;
    fullName: string;
    checkPassword(plainPassword: string): boolean;
}
export interface IUser extends IUserBase {}
export interface IUser_populated extends IUserBase {}
