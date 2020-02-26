import {Request, Response} from 'express'
import * as chalk from "chalk";

const loggerMiddleware = (req: Request, res: Response, next) => {
    console.log(chalk.green.bgBlack(`[${req.method}] - ${req.path}`))
    next()
}

export default loggerMiddleware
