import { Document } from 'mongoose'

export interface IUserSchema extends Document {
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

interface IUserBase extends IUserSchema {
    id: string;
    fullName: string;
    checkPassword(plainPassword: string): boolean;
}
//Populable data
export interface IUser extends IUserBase {
    //Tenant: ITenant["id"] | ITenant;
}
//Populated data
export interface IUserModel extends IUserBase {
    //withTenant(id: string): Promise<IUser>
}
