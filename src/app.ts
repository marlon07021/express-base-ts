import * as express from 'express'
import {Application, NextFunction, Request, Response} from 'express'
import * as chalk from 'chalk'
import NotFoundException from "./common/exceptions/not.found.exception";
import {IServiceBuilder} from "./services/iservice.builder";
import {IControllerBuilder} from "./controllers/base/icontroller.builder";

class App {
    public app: Application;
    public port: number;

    constructor(appInit: {
        port: number
        middleWares: any
        controllers: any
        services: any

    }) {
        this.app = express();
        this.port = appInit.port;
        this.services(appInit.services);
        this.middlewares(appInit.middleWares);
        this.controllers(appInit.controllers);
        this.routes();
    }

    private middlewares(middleWares: { forEach: (arg0: (middleware: any) => void) => void; }): void {
        middleWares.forEach(
            middleware => {
                this.app.use(middleware)
            }
        );
    }

    private plugins(plugins: { forEach: (arg0: (plugin: any) => void) => void; }): void {
        plugins.forEach(
            plugin => {
                this.app.use(plugin)
            }
        );
    }

    private services(services: { forEach: (arg0: (service: IServiceBuilder) => void) => void; }): void {
        services.forEach(
            serviceBuilder => {
                const service = new serviceBuilder(this.app);
                service.initialize();
            }
        );
    }

    private controllers(controllers: {forEach: (arg0: (controller: IControllerBuilder) => void) => void;}): void {
        controllers.forEach(controller => {
            new controller(this.app);
        });
    }

    private routes(): void {
        this.app.get('*', (req: Request, res: Response, next: NextFunction) => {
            next(new NotFoundException(req.path));
        });

    }

    private assets(): void {
        this.app.use(express.static('public'));
        this.app.use(express.static('views'));
    }

    private template(): void {
        this.app.set('view engine', 'pug');
    }

    public listen(): void {






        function print (path, layer) {
            if (layer.route) {
                layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))))
            } else if (layer.name === 'router' && layer.handle.stack) {
                layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))))
            } else if (layer.method) {
                console.log('%s /%s',
                    layer.method.toUpperCase(),
                    path.concat(split(layer.regexp)).filter(Boolean).join('/'))
            }
        }

        function split (thing) {
            if (typeof thing === 'string') {
                return thing.split('/')
            } else if (thing.fast_slash) {
                return ''
            } else {
                var match = thing.toString()
                    .replace('\\/?', '')
                    .replace('(?=\\/|$)', '$')
                    .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//)
                return match
                    ? match[1].replace(/\\(.)/g, '$1').split('/')
                    : '<complex:' + thing.toString() + '>'
            }
        }

        this.app._router.stack.forEach(print.bind(null, []))










        this.app.listen(this.port, () => {
            console.log(chalk.green.bgBlack(`Listening on http://localhost:${this.port}`))
        });
    }
}

export default App;


