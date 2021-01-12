import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'
import * as cors from 'cors'

import App from './app'
import loggerMiddleware from './middleware/logger'

import HomeController from './controllers/home.controller'
import UserController from './controllers/user.controller'
import AuthController from './controllers/auth.controller'

import Constants = require("./config/constants/constants");
import MetricsController from "./controllers/metrics.controller";

const app = new App({
    port: Constants.NODE_PORT,
    controllers: [
        HomeController,
        UserController,
        AuthController,
        MetricsController
    ],
    services: [],
    middleWares: [
        cors(),
        helmet(),
        bodyParser.json({limit: '1mb'}),
        bodyParser.urlencoded({limit: '1mb', extended: true}),
        loggerMiddleware
    ]
});

app.listen()
