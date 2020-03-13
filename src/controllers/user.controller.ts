import { Router, Request, Response } from "express"
import IBaseController from "./base/ibase.controller"
import UserBusiness from "../business/user.business"
import {IUser, IUserModel} from "../models/user/user.interfaces";

class UserController implements IBaseController <UserBusiness> {

    public router = Router()
    public path = '/user'

    constructor() {
        this.initRoutes()
    }

    public initRoutes(): any {
        this.router.get(this.path, this.count)
    }

    async count(req: Request, res: Response) {
        try {
            const _userBusiness = new UserBusiness()
            const userCount = await _userBusiness.count({})

            res.json({error: false, message: 'Ok', data: {count: userCount}})
        } catch (e) {
            res.json({error: true, message: "Internal Server Error", data: null})
        }
    }

    async create(req: Request, res: Response){
        try {
            const _userBusiness = new UserBusiness()
            const user: IUserModel = <IUserModel>req.body
            const result = await _userBusiness.create(user)
            res.json({error: false, message: 'Ok', data: result.id})
        } catch (e) {
            res.status(500).json({error: true, message: "Internal Server Error", data: null})
        }
    }

    find(req: Request, res: Response) : void {
        try {
            const _userBusiness = new UserBusiness()
            const id: string = req.params.id
            const user = _userBusiness.find(id)

            res.json({error: false, message: 'Ok', data: user})
        } catch (e) {
            res.status(500).json({error: true, message: "Internal Server Error", data: null})
        }
    }
    list(req: Request, res: Response) : void {

    }
    remove(req: Request, res: Response) : void {

    };
    update(req: Request, res: Response) : void {

    }
}

export default UserController
