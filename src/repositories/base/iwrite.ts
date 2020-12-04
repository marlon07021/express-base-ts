import { Document } from "mongoose";

interface IWrite<T extends Document> {
    create: (record: T) => Promise<T>;
    createMany: (records: T[]) => Promise<T[]>;
    update: (id: string, record: T) => Promise<T>;
    updateMany: (condition: any, record: T) => Promise<void>;
    remove: (id: string) => Promise<void>;
    removeMany: (condition: any) => Promise<void>;
}

export default IWrite;
