import config from "../config";

class Constants {
    static JWT_SECRET: string = process.env.JWT_SECRET || config.jwtSecret || "a0b1c2d3e4f5a6b7c8";
    static NODE_ENV: string = process.env.NODE_ENV || "development";
    static NODE_PORT: number = +process.env.NODE_PORT || config.port;
    static DB_HOST: string = process.env.DB_HOST || config[Constants.NODE_ENV].DB_HOST;
    static DB_PORT: string = process.env.DB_PORT || config[Constants.NODE_ENV].DB_PORT;
    static DB_USER: string = process.env.DB_USER || config[Constants.NODE_ENV].DB_USER;
    static DB_PASS: string = process.env.DB_PASS || config[Constants.NODE_ENV].DB_PASS;
    static DB_NAME: string = process.env.DB_NAME || config[Constants.NODE_ENV].DB_NAME;

    //NOTE: Send replica configuration on environment anyways
    static DB_CONNECTION_STRING: string  = process.env.DB_CONNECTION_STRING || `mongodb://${Constants.DB_HOST}:${Constants.DB_PORT}/${Constants.DB_NAME}`;

    static MONGODB_OPTS = config.mongoOpts;

}
Object.seal(Constants);
export = Constants;

