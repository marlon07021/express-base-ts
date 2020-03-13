import HttpException from "./http.exception";

class InternalServerErrorException extends HttpException{
    constructor() {
        super(500, `Internal Server Error`)
    }
}

export default InternalServerErrorException
