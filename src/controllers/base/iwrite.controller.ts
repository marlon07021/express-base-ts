import {RequestHandler} from "express"

interface IWriteController {
    create: RequestHandler
    update: RequestHandler
    remove: RequestHandler
}

export default IWriteController
