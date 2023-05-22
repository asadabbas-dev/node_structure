import { StatusCodes, ReasonPhrases } from 'http-status-codes';

const sendResponse = (res, response) => {
    if (response.status == false) {
        return noSuccessResponse(res, response?.message);
    } else if (response.status) {
        return successResponse(res, response.message, {
            data: response.data
        });
    } else {
        return validationErrorResponse(res, response?.message);
    }
};

const successResponse = (res, message, result) => {
    const response = {
        status: true,
        message
    };
    if (result.data) {
        response.result = result;
    }
    res.status(StatusCodes.OK).send(response);
};

const noSuccessResponse = (res, message) => {
    const response = {
        status: false,
        message
    };
    res.send(response);
};

const serverErrorResponse = (res, error) => {

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        status: false,
        error: error.toString(),
        message: ReasonPhrases.INTERNAL_SERVER_ERROR
    });
};

const validationErrorResponse = (res, errors) => {
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        status: false,
        error: errors,
        message: ReasonPhrases.UNPROCESSABLE_ENTITY
    });
};

const badRequestErrorResponse = (res, message) => {
    res.status(StatusCodes.BAD_REQUEST).send({
        status: false,
        message
    });
};

const authorizationErrorResponse = (res, message) => {
    res.status(StatusCodes.UNAUTHORIZED).send({
        status: false,
        message
    });
};

const manyRequestErrorResponse = (res, message) => {
    res.status(StatusCodes.TOO_MANY_REQUESTS).send({
        status: false,
        message
    });
};

export {
    sendResponse,
    successResponse,
    noSuccessResponse,
    serverErrorResponse,
    validationErrorResponse,
    badRequestErrorResponse,
    authorizationErrorResponse,
    manyRequestErrorResponse
};
