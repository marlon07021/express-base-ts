import App from './app'

import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'
import * as cors from 'cors'
import loggerMiddleware from './middleware/logger'
import * as controllers from './controllers'

import Constants = require("./config/constants/constants");

const app = new App({
    port: Constants.NODE_PORT,
    controllers: controllers,
    middleWares: [
        cors(),
        helmet(),
        bodyParser.json(),
        bodyParser.urlencoded({extended: true}),
        loggerMiddleware
    ]
});

app.listen()
