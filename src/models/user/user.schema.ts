import DataAccess from "../../data.access";
import { IUserModel, IUser } from './user.interfaces'
import { Schema } from 'mongoose'
import { comparePassword, hashPassword } from '../../util/crypto'

const mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {
    static get schema() {
        const schema = Schema({
            firstName: {
                type: String,
                required: true
            },
            lastName: String,
            username: {
                type: String,
                unique: true,
                required: true,
                lowercase: true
            },
            password: {
                type: String,
                required: true
            },
            role: {
                type: String,
                required: true
            },
            refreshToken: String,
            lastToken: Date,
            createdAt: {
                type: Date,
                required: true,
                default: new Date()
            },
            updatedAt: {
                type: Date,
                required: true,
                default: new Date()
            },
            removed: {
                type: Boolean,
                required: true,
                default: false,
                index: true
            }
        });

        schema.virtual("fullName").get(() => schema.firstName + " " + schema.lastName);

        schema.methods.checkPassword = function(plainPassword){
            return comparePassword(plainPassword, this.password);
        };

        return schema
    }
}

const schema = mongooseConnection.model<IUserModel, IUser>("Users", UserSchema.schema);

export default schema;
