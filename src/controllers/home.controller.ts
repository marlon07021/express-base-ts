import {Application, Router} from 'express'
import {Request, Response} from 'express'
import {BaseController} from "./base/base.controller";


class HomeController extends BaseController {

    public router = Router();

    constructor(app: Application) {
        super(app, '/');
    }

    public initRoutes(): void {
        this.router.get('', this.index);
    }

    index(req: Request, res: Response): void {
        res.status(200).send('Good coding!');
    }
}

export default HomeController
