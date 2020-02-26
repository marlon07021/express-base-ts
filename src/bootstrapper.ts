import App from './app'

import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'
import * as cors from 'cors'
import loggerMiddleware from './middleware/logger'

import jsonifyPlugin from "./plugins/jsonify";

import HomeController from './controllers/home.controller'
import UserController from './controllers/user.controller'
import Constants = require("./config/constants/constants");

const app = new App({
    port: Constants.NODE_PORT,
    controllers: [
        new HomeController(),
        new UserController()
    ],
    middleWares: [
        cors,
        helmet,
        bodyParser.json(),
        bodyParser.urlencoded({extended: true}),
        loggerMiddleware
    ],
    plugins: [
    ]
});

app.listen()
