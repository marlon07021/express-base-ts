import BaseBusiness from "./base/base.business"
import { IUserModel } from "../models/user/user.interfaces"

interface IUserBusiness extends BaseBusiness<IUserModel> {

}

export default IUserBusiness
