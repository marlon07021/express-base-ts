import * as Mongoose from 'mongoose';
import * as chalk from 'chalk'
import Constants = require("./config/constants/constants");

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;

    constructor () {
        DataAccess.connect();
    }

    static connect (): Mongoose.Connection {

        if(this.mongooseInstance) return this.mongooseInstance;

        this.mongooseConnection  = Mongoose.connection;

        this.mongooseConnection.once("connected", () => {
            console.log(chalk.black.bgGreen(`Connected to mongodb server`))
        });

        this.mongooseConnection.once("error", error => {
            console.log(chalk.black.bgRedBright(`Error in mongodb connection: ${error}`));
            this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING, Constants.MONGODB_OPTS);
        });

        this.mongooseConnection.once("disconnect", () => {
            console.log(chalk.green.bgRedBright(`Mongodb got disconnected`));
            this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING, Constants.MONGODB_OPTS);
        });

        this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING, Constants.MONGODB_OPTS);
        return this.mongooseInstance;
    }

}

DataAccess.connect();
export default DataAccess;
