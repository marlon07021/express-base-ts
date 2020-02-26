interface IWrite<T> {
    create: (record : T) => Promise<string>;
    update:(id: string, record:T) => Promise<void> ;
    updateMany:(condition: any, record:T) => Promise<void> ;
    remove: (id: string ) => Promise<void>;
    removeMany: (condition: any) => Promise<void>;
}

export default IWrite;
