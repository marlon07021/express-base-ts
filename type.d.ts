declare module 'express-serve-static-core' {
    export interface Request {
        user?: any
        token?: string
    }

    export interface Response {
        jsonify?: any;
    }
}
