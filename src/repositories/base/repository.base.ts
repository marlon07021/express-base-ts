import {Document, Model} from 'mongoose'
import IRead from './iread'
import IWrite from './iwrite'
import {IUserModel} from "../../models/user/user.interfaces";

class RepositoryBase<T extends Document> implements IRead<T>, IWrite<T>{

    private _model: Model<Document>;

    constructor(schemaModel: Model<Document>) {
        this._model = schemaModel
    }

    public async create(item: T) {
        item.removed = false;
        item.createdAt = new Date();
        return this._model.create(item);
    }

    public async find(id: string) {
        return this._model.findOne({_id : id, removed: false}).exec();
    }

    public async findBy(condition: any) {
        if ( !condition.removed ) condition.removed = false;

        return this._model.findOne(condition).exec();
    }

    public async list(condition?: any, limit?: number, skip?: number, populate?: any, sort?: any, select?: any) {
        if ( !condition.removed ) condition.removed = false;

        const query = this._model.find(condition);

        if ( sort ) query.sort(sort);
        if ( limit ) query.limit(limit);
        if ( skip ) query.skip(skip);
        if ( populate ) query.populate(populate);
        if ( select ) query.select(select);

        return query.exec()
    }

    public async count(condition: any) {
        if ( !condition.removed ) condition.removed = false;
        const query = this._model.countDocuments(condition);

        return query.exec();
    }

    public async remove(id: string) {
        return this._model.updateOne({_id: id}, {$set: {removed: true}}).exec();
    }

    public async removeMany(condition: any) {
        return this._model.updateMany(condition, {$set: {removed: true}}).exec();
    };

    public async update(id: string, record: T) {
        record.updatedAt = new Date();
        return this._model.updateOne({_id: id}, {$set: record});
    };
    public async updateMany(condition: any, record: T) {
        record.updatedAt = new Date();
        return this._model.updateOne(condition, {$set: record});
    }
}
export default RepositoryBase;
