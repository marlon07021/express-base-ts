import {Document} from "mongoose";
import IRead from "../../repositories/base/iread"
import IWrite from "../../repositories/base/iwrite"

interface IBaseBusiness<T extends Document> extends IRead<T>, IWrite<T>
{
}
export default IBaseBusiness;
