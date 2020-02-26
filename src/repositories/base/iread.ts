interface IRead<T> {
    find: (id: string) => Promise<T>;
    list: (condition: any, limit: number, skip: number, populate: any, sort?: any, select?: any) => Promise<any>;
    count: (condition: any) => Promise<any>;
}

export default IRead;
