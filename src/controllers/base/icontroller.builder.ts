import {Application} from "express";
import IBaseController from "./ibase.controller";

export interface IControllerBuilder {
    new(app: Application, path?: string): IBaseController
}