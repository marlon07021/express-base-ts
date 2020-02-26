import * as express from 'express'
import {Request, Response} from 'express'


class HomeController {
    public path = '/'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes(): any {
        this.router.get('/', this.index)
    }

    index = (req: Request, res: Response) => {
        res.status(200).json({error: false, message: 'It works'})
    }
}

export default HomeController
