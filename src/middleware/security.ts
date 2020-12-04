import {Request, Response, NextFunction} from "express";
import * as jwt from "jsonwebtoken";
import Constants = require("../config/constants/constants");
import UserBusiness from "../business/user/user.business";
import IUserBusiness from "../business/user/iuser.business";
import {IUser} from "../models/user/user.interfaces";

export const checkJWT = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    if ( !req.headers["authorization"] ) {
        res.status(401).send();
        return;
    }

    const [, token] = (<string>req.headers["authorization"]).split(" ");
    let jwtPayload;

    try {
        jwtPayload = <any>jwt.verify(token, Constants.JWT_SECRET);
        res.locals.jwtPayload = jwtPayload;
    } catch (error) {
        res.status(401).send();
        return;
    }

    const {userId, username} = jwtPayload;
    const newToken = jwt.sign({userId, username}, Constants.JWT_SECRET, {
        expiresIn: "1h"
    });
    res.setHeader("token", newToken);

    next();
};


export const checkRole = (roles: Array<string>) => {
    return async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
        try {
            const id = res.locals.jwtPayload.userId;
            const userBusiness: IUserBusiness = new UserBusiness();
            const user: IUser = await userBusiness.find(id);
            if (!user) {
                res.status(401).send();
            }
            if ( roles.indexOf(user.role) > -1) {
                req.user = user;
                next();
            } else
                res.status(401).send();
        } catch (e) {
            res.status(401).send();
        }

    }
};
