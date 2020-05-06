import { Router, Request, Response } from "express"
import IBaseController from "./base/ibase.controller"
import UserBusiness from "../business/user.business"
import {IUser, IUserModel} from "../models/user/user.interfaces";
import IUserBusiness from "../business/iuser.business";
import * as jwt from "jsonwebtoken";
import Constants = require("../config/constants/constants");

class AuthController {

    public router = Router();
    public path = '/auth';

    constructor() {
        this.initRoutes()
    }

    public initRoutes(): any {
        this.router.post(this.path + '/login', this.login)
    }

    public async login(req: Request, res: Response): Promise<void> {
        try {
            const {username, password} = req.body;

            const _userBusiness : IUserBusiness = new UserBusiness();
            const user: IUser = <IUser>(await _userBusiness.findBy({username: username}));

            if ( !user ) {
                res.status(401).send();
                return;
            }
            if (!user.checkPassword(password)) {
                res.status(401).send();
                return;
            }

            const token = jwt.sign({userId: user.id, username: user.username}, Constants.JWT_SECRET, {expiresIn: "1h"});

            res.json({token});

        } catch (e) {
            res.json({error: true, message: "Internal Server Error", data: null});
        }
    }

    public async changePassword(req: Request, res: Response): Promise<void> {
        try {
            const id = res.locals.jwtPayload.userId;

            const {oldPassword, newPassword} = req.body;

            const _userBusiness : IUserBusiness = new UserBusiness();
            const user: IUser = <IUser>(await _userBusiness.find(id));

            if ( !user ) {
                res.status(401).send();
                return;
            }
            if (!user.checkPassword(oldPassword)) {
                res.status(401).send();
                return;
            }

            user.password = newPassword;

            await _userBusiness.update(user.id, user);

            res.status(204).send();

        } catch (e) {
            res.status(500).send();
        }
    }
}

export default AuthController
