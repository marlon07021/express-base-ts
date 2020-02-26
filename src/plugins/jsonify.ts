import {Request, Response} from 'express'
const jsonifyPlugin = (req: Request, res: Response, next) => {
/*
    res.jsonify = function(error: any, message: string = '', data: any = null, status_code: number = 200) {
        this.status(status_code).json({
                "error": error,
                "message": message,
                "data": data
            });
    };

 */
    next()
}

export default jsonifyPlugin
