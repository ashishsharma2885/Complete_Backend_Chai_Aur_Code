class ApiError extends Error {
    constructor(
        statusCode,
        messaage= "Something went wrong",
        errors = [],
        stack = ""
        
    ){
        super(messaage)
        this.statusCode = statusCode
        this.data = null
        this.message = messaage
        this.success = false
        this.errors = errors

        if (stack) {
            this. stack  = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}