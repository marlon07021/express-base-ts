class HttpException extends Error {
    status: number
    message: string

    constructor(status: number, message: string) {
        super(message)
        this.status = status
        this.message = message
        //TODO: handle production
        //this.stack = ""
    }
}

export default HttpException
