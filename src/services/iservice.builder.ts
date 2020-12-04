import {Application} from "express";
import {IService} from "./iservice";

export interface IServiceBuilder {
    new(app: Application): IService
}