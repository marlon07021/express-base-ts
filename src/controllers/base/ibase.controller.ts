import IReadController from "./iread.controller"
import IWriteController from "./iwrite.controller"
import IBaseBusiness from '../../business/base/base.business'

interface IBaseController<T extends IBaseBusiness<Object>> extends IReadController, IWriteController {
    initRoutes() : any
}

export default IBaseController
