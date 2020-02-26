import * as express from "express"

interface IWriteController {
    create: express.RequestHandler
    update: express.RequestHandler
    remove: express.RequestHandler
}

export default IWriteController
