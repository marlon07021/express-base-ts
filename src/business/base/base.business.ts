import IRead from "../../repositories/base/iread"
import IWrite from "../../repositories/base/iwrite"
interface BaseBusiness<T> extends IRead<T>, IWrite<T>
{
}
export default BaseBusiness;
