import { RequestHandler } from "express"

interface IReadController {
    list: RequestHandler
    find: RequestHandler
}
export default IReadController
