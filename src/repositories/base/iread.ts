import {Document} from 'mongoose'

interface IRead<T extends Document> {
    find: (id: string, populate?: any, select?: any) => Promise<T>;
    findBy: (condition: any, populate?: any, select?: any) => Promise<T>;
    list: (condition?: any, limit?: number, skip?: number, populate?: any, sort?: any, select?: any) => Promise<T[]>;
    count: (condition?: any) => Promise<number>;
}

export default IRead;
