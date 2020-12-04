import IBaseController from "./ibase.controller";
import {Application, Router} from "express";

export abstract class BaseController implements IBaseController{
    app: Application;
    path: string = '/';
    router: Router = Router()

    protected constructor(app: Application, path?: string) {
        this.app = app;
        if ( path )
            this.path = path;

        this.initRoutes();

        this.app.use(this.path, this.router);
    }

    initRoutes(): void {}

}