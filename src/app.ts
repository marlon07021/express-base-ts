import * as express from 'express'
import { Application } from 'express'
import * as chalk from 'chalk'
import Constants = require("./config/constants/constants");

class App {
    public app: Application
    public port: number

    constructor(appInit: {
        port: number
        middleWares: any
        plugins: any
        controllers: any

    }) {
        this.app = express()
        this.port = appInit.port

        this.middlewares(appInit.middleWares)
        this.plugins(appInit.plugins)
        this.routes(appInit.controllers)
    }

    private middlewares(middleWares: { forEach: (arg0: (middleware: any) => void) => void; }) {
        middleWares.forEach(
            middleware => {
                this.app.use(middleware)
            }
        );
    }

    private plugins(plugins: { forEach: (arg0: (plugin: any) => void) => void; }) {
        plugins.forEach(
            plugin => {
                this.app.use(plugin)
            }
        );
    }

    private routes(controllers: {forEach: (arg0: (controller: any) => void) => void;}) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router)
        })
    }

    private assets() {
        this.app.use(express.static('public'))
        this.app.use(express.static('views'))
    }

    private template() {
        this.app.set('view engine', 'pug')
    }

    public listen() {
        this.app.listen(this.port, this.onListening)
    }

    public onListening() {
        console.log(chalk.green.bgBlack(`Listening on http://localhost:${Constants.NODE_PORT}`))
    }
}

export default App
