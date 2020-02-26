import * as express from "express"

interface IReadController {
    list: express.RequestHandler
    find: express.RequestHandler
}
export default IReadController
