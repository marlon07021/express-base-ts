import {Document, Model} from 'mongoose'
import IRead from './iread'
import IWrite from './iwrite'

abstract class RepositoryBase<T extends Document> implements IRead<T>, IWrite<T> {

    private _model: Model<Document>;

    constructor(model: Model<Document>) {
        this._model = model
    }

    public create(record: T): Promise<T> {
        return <Promise<T>>this._model.create(record);
    }

    createMany(records: T[]): Promise<T[]> {
        return <Promise<T[]>>this._model.create(records);
    }

    public find(id: string, populate?: any, select?: any): Promise<T> {
        const query = this._model.findOne({_id: id})

        if (populate)
            query.populate(populate);

        if (select)
            query.select(select);

        return <Promise<T>>query.exec();
    }

    public findBy(condition: any, populate?: any, select?: any): Promise<T> {
        const query = this._model.findOne(condition);

        if (populate)
            query.populate(populate);

        if (select)
            query.select(select);

        return <Promise<T>>query.exec();
    }

    public list(condition: any = {}, limit?: number, skip?: number, populate?: any, sort?: any, select?: any): Promise<T[]> {
        const query = this._model.find(condition);

        if (sort) query.sort(sort);
        if (limit) query.limit(limit);
        if (skip) query.skip(skip);
        if (populate) query.populate(populate);
        if (select) query.select(select);

        return <Promise<T[]>>query.exec()
    }

    public async count(condition: any): Promise<number> {
        const query = this._model.countDocuments(condition);

        return query.exec();
    }

    public async remove(id: string) {
        return this._model.remove({_id: id}).exec();
    }


    public async removeMany(condition: any) {
        return this._model.remove(condition).exec();
    };

    public async update(id: string, record: T) {
        return this._model.updateOne({_id: id}, {$set: record});
    };

    public async updateBy(condition: any, record: any, upsert = false) {
        return this._model.findOneAndUpdate(condition, {$set: record}, {new: true, upsert: upsert});
    }

    public async updateMany(condition: any, record: T) {
        return this._model.updateOne(condition, {$set: record});
    }

    public async findOneAndUpdate(condition: any, records: any, populate = null, isNew = false): Promise<T> {

        const query = this._model.findOneAndUpdate(condition, {$set: records}, {new: isNew});

        query.populate(populate);

        return <Promise<T>>query.exec();
    }
}

export default RepositoryBase;
