import {Request, Response, Application} from "express";
import {BaseController} from "./base/base.controller";
import DataAccess from "../data.access";

class MetricsController extends BaseController{

    constructor(app: Application) {
        super(app, '/metrics');
    }

    public initRoutes(): void {
        this.router.get( '/readiness', this.readiness);
        this.router.get( '/liveness', this.liveness);
    }

    public async readiness(req: Request, res: Response): Promise<void> {
        if ( DataAccess.mongooseConnection.readyState === 1 )
            res.send("Ok");
        else
            res.status(503).send("Not Ok");
    }

    public async liveness(req: Request, res: Response): Promise<void> {
        res.send("Ok");
    }
}

export default MetricsController
