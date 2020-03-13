import HttpException from "./http.exception"

class NotFoundException extends HttpException{
    constructor(id: string) {
        super(404, `${id} Not found`)
    }
}


export default NotFoundException
