import IReadController from "./iread.controller"
import IWriteController from "./iwrite.controller"
import IBaseBusiness from '../../business/base/base.business'
import {Router} from "express";

interface IBaseController<T extends IBaseBusiness<Object>> extends IReadController, IWriteController {
    initRoutes(route?: string) : any
    path: string;
    router: Router;
}

export default IBaseController
