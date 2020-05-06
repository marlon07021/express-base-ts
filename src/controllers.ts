import HomeController from './controllers/home.controller'
import UserController from './controllers/user.controller'
import AuthController from './controllers/auth.controller'

export default [
    new HomeController(),
    new UserController(),
    new AuthController()
];
