import { Router, Request, Response } from "express"
import IBaseController from "./base/ibase.controller"
import UserBusiness from "../business/user.business"
import {IUser, IUserModel} from "../models/user/user.interfaces";
import IUserBusiness from "../business/iuser.business";
import {checkJWT, checkRole} from "../middleware/security";

class UserController implements IBaseController <UserBusiness> {

    public router = Router();
    public path = '/user';

    constructor() {
        this.initRoutes()
    }

    public initRoutes(): any {
        this.router.post(this.path, this.create);
        this.router.get(this.path, [checkJWT, checkRole(["ROLE_ADMIN"])], this.list);
    }

    public async count(req: Request, res: Response): Promise<void> {
        try {
            const _userBusiness: IUserBusiness = new UserBusiness();
            const userCount = await _userBusiness.count({});

            res.json({count: userCount});
        } catch (e) {
            res.status(500).send();
        }
    }

    public async create(req: Request, res: Response): Promise<void>{
        try {
            const _userBusiness = new UserBusiness();
            const user: IUserModel = <IUserModel>req.body;
            await _userBusiness.create(user);
            res.status(201).send();
        } catch (e) {
            console.log(e);
            res.status(500).send();
        }
    }

    public async find(req: Request, res: Response) : Promise<void> {
        try {
            const _userBusiness = new UserBusiness();
            const id: string = req.params.id;
            const user = _userBusiness.find(id);

            res.json({error: false, message: 'Ok', data: user});
        } catch (e) {
            res.status(500).json({error: true, message: "Internal Server Error", data: null});
        }
    }
    public async list(req: Request, res: Response) : Promise<void> {
        try {
            const _userBusiness: IUserBusiness = new UserBusiness();
            const users: Array<IUser> = await _userBusiness.list();

            res.status(200).send(users);
        } catch (e) {
            res.status(500).send();
        }
    }
    remove(req: Request, res: Response) : void {

    };
    update(req: Request, res: Response) : void {

    }
}

export default UserController
