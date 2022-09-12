
const response = (res, statusCode, status, message, data = null) => {

    const responseData = {
        status,
        message,
        data
    }
    return res.status(statusCode).json(responseData);
}

const Success = (res, message, data) => response(res, 200, 1, message, data)
const NotFound = (res, message, data) => response(res, 404, 0, message, data)
const ServerError = (res, message, data) => response(res, 500, 0, message, data)


module.exports = {
    Success,
    NotFound,
    ServerError,
}