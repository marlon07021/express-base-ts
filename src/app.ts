import * as express from 'express'
import { Application } from 'express'
import * as chalk from 'chalk'

class App {
    public app: Application
    public port: number

    constructor(appInit: {
        port: number;
        middleWares: any;
        controllers: any;

    }) {
        this.app = express()
        this.port = appInit.port

        this.middlewares(appInit.middleWares)
        this.routes(appInit.controllers)
    }

    private middlewares(middleWares: { forEach: (arg0: (middleware: any) => void) => void; }) {
        middleWares.forEach(
            middleware => {
                this.app.use(middleware)
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

    private onListening() {
        console.log(chalk.green.bgBlack(`Listening on http://0.0.0.0: ${this.port}`))
    }
}

export default App
