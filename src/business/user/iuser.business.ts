import IBaseBusiness from "../base/ibase.business"
import {IUser} from "../../models/user/user.interfaces"

interface IUserBusiness extends IBaseBusiness<IUser> {

}

export default IUserBusiness
