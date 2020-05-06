import { Router } from 'express'
import {Request, Response} from 'express'


class HomeController {
    public path = '/';
    public router = Router();

    constructor() {
        this.initRoutes()
    }

    public initRoutes(): void {
        this.router.get(this.path, this.index);
    }

    index(req: Request, res: Response): void {
        res.status(200).send('Good coding!');
    }
}

export default HomeController
